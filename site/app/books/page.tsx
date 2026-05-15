import Image from "next/image";

const books = [
  {
    file: "magic_of_thinking_big.jpg",
    title: "Magic of Thinking Big",
  },
  {
    file: "the_compound_effect.jpg",
    title: "The Compound Effect",
  },
  {
    file: "how_raised_myself_from_failure_to_success_in_selling.jpg",
    title: "How I Raised Myself from Failure to Success in Selling",
  },
  {
    file: "how_to_win_friends_and_influence_people.jpg",
    title: "How to Win Friends and Influence People",
  },
  {
    file: "atomic_habits.jpg",
    title: "Atomic Habits",
  },
  {
    file: "everyone_communicates_few_connect.jpg",
    title: "Everyone Communicates Few Connect",
  },
  {
    file: "go_for_no.jpg",
    title: "Go for No",
  },
  {
    file: "be_a_people_person.jpg",
    title: "Be a People Person",
  },
  {
    file: "how_to_start_a_conversation_and_make_friends.jpg",
    title: "How to Start a Conversation and Make Friends",
  },
  {
    file: "Bringing_Out_The_Best_in_People.jpg",
    title: "Bringing Out The Best in People",
  },
  {
    file: "the_go_giver.jpg",
    title: "The Go Giver",
  },
  {
    file: "think_and_grow_rich.jpg",
    title: "Think and Grow Rich",
  },
  {
    file: "what_do_you_say_when_you_talk_to_yourself.jpg",
    title: "What Do You Say When You Talk to Yourself",
  },
  {
    file: "7_habits_of_highly_effective_people.jpg",
    title: "7 Habits of Highly Effective People",
  },
  {
    file: "13_Things_Mentally_Strong_People_Don’t_Do.jpg",
    title: "13 Things Mentally Strong People Don't Do",
  },
  {
    file: "eat_that_frog.jpg",
    title: "Eat That Frog",
  },
  {
    file: "mindset.jpg",
    title: "Mindset",
  },
  {
    file: "skill_with_people.jpg",
    title: "Skill with People",
  },
  {
    file: "Crucial_Conversations.jpg",
    title: "Crucial Conversations",
  },
  {
    file: "Power_Of_Positive_Thinking.jpg",
    title: "Power Of Positive Thinking",
  },
  {
    file: "The_21_Indispensable_Qualities_of_a_Leader.jpg",
    title: "The 21 Indispensable Qualities of a Leader",
  },
  {
    file: "The_Energy_Bus.jpg",
    title: "The Energy Bus",
  },
  {
    file: "Turn_Setbacks_into_Greenbacks.jpg",
    title: "Turn Setbacks into Greenbacks",
  },
  {
    file: "the_mountain_is_you.jpg",
    title: "The Mountain Is You",
  },
  {
    file: "winning_tim_grover.jpg",
    title: "Winning",
  },
];

export default function Books() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-3">
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-12">
        Books
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {books.map((book) => (
          <div key={book.file} className="flex flex-col items-center text-center">
            <div className="relative w-48 h-64 mb-4 shadow-lg rounded-md overflow-hidden">
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/book_covers/${book.file}`}
                alt={book.title}
                fill
                className="object-cover"
              />
            </div>
            <p className="text-sm font-medium max-w-[200px]">{book.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
