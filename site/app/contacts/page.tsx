'use client';

import { useState } from 'react';
import { Copy, Check, Users } from 'lucide-react';

const sampleContacts = [
  {
    id: 1,
    name: "John Smith",
    location: "Austin, TX",
    background: "Marketing professional, interested in health products",
    status: "Contacted - Scheduled meeting for next week",
    notes: "Referred by Sarah. Very enthusiastic about business opportunity."
  },
  {
    id: 2,
    name: "Maria Garcia",
    location: "Phoenix, AZ",
    background: "Stay-at-home parent, looking for flexible income",
    status: "New - Initial conversation completed",
    notes: "Follow up after she reviews the product catalog."
  },
  {
    id: 3,
    name: "David Chen",
    location: "San Francisco, CA",
    background: "Software engineer, fitness enthusiast",
    status: "Presented - Reviewing business plan",
    notes: "Asked great questions. Interested in retail customer approach."
  },
  {
    id: 4,
    name: "Lisa Johnson",
    location: "Seattle, WA",
    background: "Teacher, passionate about wellness",
    status: "Active - Started using products",
    notes: "Building retail base. Check in weekly for support."
  },
  {
    id: 5,
    name: "Robert Williams",
    location: "Denver, CO",
    background: "Sales background, recently relocated",
    status: "Follow-up needed - Hasn't responded in 2 weeks",
    notes: "Send message about upcoming event."
  },
  {
    id: 6,
    name: "Amanda Brown",
    location: "Boston, MA",
    background: "Nurse, interested in supplemental income",
    status: "Contacted - Sent product samples",
    notes: "Waiting for feedback on samples before next conversation."
  },
  {
    id: 7,
    name: "Michael Lee",
    location: "Miami, FL",
    background: "Entrepreneur, owns local gym",
    status: "Warm lead - Met at networking event",
    notes: "Great connection point with fitness community."
  },
  {
    id: 8,
    name: "Jennifer Davis",
    location: "Atlanta, GA",
    background: "Real estate agent, extensive network",
    status: "New - Introduced to coach",
    notes: "Schedule coffee meeting to discuss opportunity."
  }
];

export default function ContactsPage() {
  const [copied, setCopied] = useState(false);

  const copyTableToClipboard = async () => {
    // Create tab-separated text for easy paste into Excel/Google Sheets
    const headers = "Name\tLocation\tBackground\tStatus\tNotes";
    const rows = sampleContacts.map(contact =>
      `${contact.name}\t${contact.location}\t${contact.background}\t${contact.status}\t${contact.notes}`
    ).join('\n');

    const tableText = `${headers}\n${rows}`;

    try {
      await navigator.clipboard.writeText(tableText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-6">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Users className="w-10 h-10 text-blue-600 dark:text-blue-400" />
          <h1 className="text-2xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
            Contact Tracker
          </h1>
        </div>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto mb-4">
          Sample contact list to help you track your prospects and team members
        </p>
        <p className="text-base text-gray-500 dark:text-gray-500 max-w-3xl mx-auto">
          Use the copy button below to paste this template into Excel or Google Sheets, then update with your own contacts
        </p>
      </div>

      {/* Copy Button */}
      <div className="flex justify-end mb-4">
        <button
          onClick={copyTableToClipboard}
          className="flex items-center gap-1.5 px-3 py-2 md:gap-2 md:px-6 md:py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white text-sm md:text-base font-semibold rounded-lg transition-colors shadow-lg hover:shadow-xl"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4 md:w-5 md:h-5" />
              Copied!
            </>
          ) : (
            <>
              <Copy className="w-4 h-4 md:w-5 md:h-5" />
              Copy Table
            </>
          )}
        </button>
      </div>

      {/* Table */}
      <div className="bg-white dark:bg-slate-800 rounded-xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider">
                  Location
                </th>
                <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider">
                  Background
                </th>
                <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider">
                  Notes
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {sampleContacts.map((contact, index) => (
                <tr
                  key={contact.id}
                  className={`${
                    index % 2 === 0
                      ? 'bg-gray-50 dark:bg-slate-900/50'
                      : 'bg-white dark:bg-slate-800'
                  } hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors`}
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-base font-semibold text-gray-900 dark:text-gray-100">
                      {contact.name}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-base text-gray-700 dark:text-gray-300">
                      {contact.location}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-base text-gray-700 dark:text-gray-300">
                      {contact.background}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-base text-gray-700 dark:text-gray-300">
                      {contact.status}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-base text-gray-700 dark:text-gray-300">
                      {contact.notes}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Instructions */}
      <div className="mt-8 bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-900/30 dark:to-amber-800/20 border-l-4 border-amber-500 p-6 rounded-r-xl">
        <h3 className="font-bold text-xl text-amber-900 dark:text-amber-100 mb-3">
          How to Use This Template
        </h3>
        <ol className="space-y-2 text-gray-700 dark:text-gray-300 text-base list-decimal list-inside">
          <li>Click the "Copy Table" button above to copy the entire table</li>
          <li>Open Excel Online, Google Sheets, or your preferred spreadsheet tool</li>
          <li>Paste the data (Ctrl+V or Cmd+V) into your spreadsheet</li>
          <li>Replace the sample data with your actual contacts</li>
          <li>Customize the Status values to match your workflow (e.g., "New", "Contacted", "Scheduled", "Presented", "Active")</li>
          <li>Share the spreadsheet with your coach for regular reviews and guidance</li>
        </ol>
      </div>
    </div>
  );
}
