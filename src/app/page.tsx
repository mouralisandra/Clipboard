import { MainActions } from "@/components/notes/main-actions";
import NotesList from "@/components/notes/notes-list";

export default function Home() {
  return (
    <main className="p-8 pt-4">
      <h1 className="text-4xl font-bold">LECLEEEEERC !</h1>
      <p className="mt-2 leading-4 text-gray-700">
       Nothing just an inchident !
        <br />
        Pfa les tigres? Miaw miaw
      </p>

      <MainActions />

      <h4 className="text-xl font-bold">Latest notes:</h4>
      <NotesList />
    </main>
  );
}
