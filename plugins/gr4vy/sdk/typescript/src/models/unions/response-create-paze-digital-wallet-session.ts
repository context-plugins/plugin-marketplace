import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { pazeMobileSessionSchema, type PazeMobileSession } from "../paze-mobile-session.js";
import { pazeWebSessionSchema, type PazeWebSession } from "../paze-web-session.js";

export type ResponseCreatePazeDigitalWalletSession = PazeWebSession | PazeMobileSession;

export const responseCreatePazeDigitalWalletSessionSchema: Schema<ResponseCreatePazeDigitalWalletSession> =
  s.of<ResponseCreatePazeDigitalWalletSession>(
    s.union([s.lazy(() => pazeWebSessionSchema), s.lazy(() => pazeMobileSessionSchema)]),
  );
