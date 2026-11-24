import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  apiV1MiscBlueskyCommentRequestSchema,
  type ApiV1MiscBlueskyCommentRequest,
} from "../models/api-v1-misc-bluesky-comment-request.js";
import {
  apiV1MiscBlueskyCommentResponseSchema,
  type ApiV1MiscBlueskyCommentResponse,
} from "../models/api-v1-misc-bluesky-comment-response.js";
import {
  apiV1MiscBlueskyComment400Error1Schema,
  type ApiV1MiscBlueskyComment400Error1,
} from "../models/api-v1-misc-bluesky-comment400-error1.js";
import {
  apiV1MiscBlueskyComment401Error1Schema,
  type ApiV1MiscBlueskyComment401Error1,
} from "../models/api-v1-misc-bluesky-comment401-error1.js";
import {
  apiV1MiscBlueskyComment403Error1Schema,
  type ApiV1MiscBlueskyComment403Error1,
} from "../models/api-v1-misc-bluesky-comment403-error1.js";
import {
  apiV1MiscBlueskyComment404Error1Schema,
  type ApiV1MiscBlueskyComment404Error1,
} from "../models/api-v1-misc-bluesky-comment404-error1.js";
import {
  apiV1MiscBlueskyComment429Error1Schema,
  type ApiV1MiscBlueskyComment429Error1,
} from "../models/api-v1-misc-bluesky-comment429-error1.js";
import {
  apiV1MiscBlueskyComment500Error1Schema,
  type ApiV1MiscBlueskyComment500Error1,
} from "../models/api-v1-misc-bluesky-comment500-error1.js";
import {
  apiV1MiscBlueskyComment502Error1Schema,
  type ApiV1MiscBlueskyComment502Error1,
} from "../models/api-v1-misc-bluesky-comment502-error1.js";
import {
  apiV1MiscBlueskyComment503Error1Schema,
  type ApiV1MiscBlueskyComment503Error1,
} from "../models/api-v1-misc-bluesky-comment503-error1.js";
import {
  apiV1MiscBlueskyComment504Error1Schema,
  type ApiV1MiscBlueskyComment504Error1,
} from "../models/api-v1-misc-bluesky-comment504-error1.js";
import {
  apiV1MiscBlueskyPostRequestSchema,
  type ApiV1MiscBlueskyPostRequest,
} from "../models/api-v1-misc-bluesky-post-request.js";
import {
  apiV1MiscBlueskyPostResponseSchema,
  type ApiV1MiscBlueskyPostResponse,
} from "../models/api-v1-misc-bluesky-post-response.js";
import {
  apiV1MiscBlueskyPost400Error1Schema,
  type ApiV1MiscBlueskyPost400Error1,
} from "../models/api-v1-misc-bluesky-post400-error1.js";
import {
  apiV1MiscBlueskyPost401Error1Schema,
  type ApiV1MiscBlueskyPost401Error1,
} from "../models/api-v1-misc-bluesky-post401-error1.js";
import {
  apiV1MiscBlueskyPost403Error1Schema,
  type ApiV1MiscBlueskyPost403Error1,
} from "../models/api-v1-misc-bluesky-post403-error1.js";
import {
  apiV1MiscBlueskyPost404Error1Schema,
  type ApiV1MiscBlueskyPost404Error1,
} from "../models/api-v1-misc-bluesky-post404-error1.js";
import {
  apiV1MiscBlueskyPost429Error1Schema,
  type ApiV1MiscBlueskyPost429Error1,
} from "../models/api-v1-misc-bluesky-post429-error1.js";
import {
  apiV1MiscBlueskyPost500Error1Schema,
  type ApiV1MiscBlueskyPost500Error1,
} from "../models/api-v1-misc-bluesky-post500-error1.js";
import {
  apiV1MiscBlueskyPost502Error1Schema,
  type ApiV1MiscBlueskyPost502Error1,
} from "../models/api-v1-misc-bluesky-post502-error1.js";
import {
  apiV1MiscBlueskyPost503Error1Schema,
  type ApiV1MiscBlueskyPost503Error1,
} from "../models/api-v1-misc-bluesky-post503-error1.js";
import {
  apiV1MiscBlueskyPost504Error1Schema,
  type ApiV1MiscBlueskyPost504Error1,
} from "../models/api-v1-misc-bluesky-post504-error1.js";
import {
  apiV1MiscDiscordMessageRequestSchema,
  type ApiV1MiscDiscordMessageRequest,
} from "../models/api-v1-misc-discord-message-request.js";
import {
  apiV1MiscDiscordMessageResponseSchema,
  type ApiV1MiscDiscordMessageResponse,
} from "../models/api-v1-misc-discord-message-response.js";
import {
  apiV1MiscDiscordMessage400Error1Schema,
  type ApiV1MiscDiscordMessage400Error1,
} from "../models/api-v1-misc-discord-message400-error1.js";
import {
  apiV1MiscDiscordMessage401Error1Schema,
  type ApiV1MiscDiscordMessage401Error1,
} from "../models/api-v1-misc-discord-message401-error1.js";
import {
  apiV1MiscDiscordMessage403Error1Schema,
  type ApiV1MiscDiscordMessage403Error1,
} from "../models/api-v1-misc-discord-message403-error1.js";
import {
  apiV1MiscDiscordMessage404Error1Schema,
  type ApiV1MiscDiscordMessage404Error1,
} from "../models/api-v1-misc-discord-message404-error1.js";
import {
  apiV1MiscDiscordMessage429Error1Schema,
  type ApiV1MiscDiscordMessage429Error1,
} from "../models/api-v1-misc-discord-message429-error1.js";
import {
  apiV1MiscDiscordMessage500Error1Schema,
  type ApiV1MiscDiscordMessage500Error1,
} from "../models/api-v1-misc-discord-message500-error1.js";
import {
  apiV1MiscDiscordMessage502Error1Schema,
  type ApiV1MiscDiscordMessage502Error1,
} from "../models/api-v1-misc-discord-message502-error1.js";
import {
  apiV1MiscDiscordMessage503Error1Schema,
  type ApiV1MiscDiscordMessage503Error1,
} from "../models/api-v1-misc-discord-message503-error1.js";
import {
  apiV1MiscDiscordMessage504Error1Schema,
  type ApiV1MiscDiscordMessage504Error1,
} from "../models/api-v1-misc-discord-message504-error1.js";
import {
  apiV1MiscFacebookCommentRequestInternalSchema,
  type ApiV1MiscFacebookCommentRequest,
} from "../models/api-v1-misc-facebook-comment-request.js";
import {
  apiV1MiscFacebookCommentRequest1Schema,
  type ApiV1MiscFacebookCommentRequest1,
} from "../models/api-v1-misc-facebook-comment-request1.js";
import {
  apiV1MiscFacebookCommentResponseSchema,
  type ApiV1MiscFacebookCommentResponse,
} from "../models/api-v1-misc-facebook-comment-response.js";
import {
  apiV1MiscFacebookCommentResponse1Schema,
  type ApiV1MiscFacebookCommentResponse1,
} from "../models/api-v1-misc-facebook-comment-response1.js";
import {
  apiV1MiscFacebookComment400Error1Schema,
  type ApiV1MiscFacebookComment400Error1,
} from "../models/api-v1-misc-facebook-comment400-error1.js";
import {
  apiV1MiscFacebookComment401Error1Schema,
  type ApiV1MiscFacebookComment401Error1,
} from "../models/api-v1-misc-facebook-comment401-error1.js";
import {
  apiV1MiscFacebookComment403Error1Schema,
  type ApiV1MiscFacebookComment403Error1,
} from "../models/api-v1-misc-facebook-comment403-error1.js";
import {
  apiV1MiscFacebookComment404Error1Schema,
  type ApiV1MiscFacebookComment404Error1,
} from "../models/api-v1-misc-facebook-comment404-error1.js";
import {
  apiV1MiscFacebookComment429Error1Schema,
  type ApiV1MiscFacebookComment429Error1,
} from "../models/api-v1-misc-facebook-comment429-error1.js";
import {
  apiV1MiscFacebookComment500Error1Schema,
  type ApiV1MiscFacebookComment500Error1,
} from "../models/api-v1-misc-facebook-comment500-error1.js";
import {
  apiV1MiscFacebookComment502Error1Schema,
  type ApiV1MiscFacebookComment502Error1,
} from "../models/api-v1-misc-facebook-comment502-error1.js";
import {
  apiV1MiscFacebookComment503Error1Schema,
  type ApiV1MiscFacebookComment503Error1,
} from "../models/api-v1-misc-facebook-comment503-error1.js";
import {
  apiV1MiscFacebookComment504Error1Schema,
  type ApiV1MiscFacebookComment504Error1,
} from "../models/api-v1-misc-facebook-comment504-error1.js";
import {
  apiV1MiscFacebookPagesResponseSchema,
  type ApiV1MiscFacebookPagesResponse,
} from "../models/api-v1-misc-facebook-pages-response.js";
import {
  apiV1MiscFacebookPages400Error1Schema,
  type ApiV1MiscFacebookPages400Error1,
} from "../models/api-v1-misc-facebook-pages400-error1.js";
import {
  apiV1MiscFacebookPages401Error1Schema,
  type ApiV1MiscFacebookPages401Error1,
} from "../models/api-v1-misc-facebook-pages401-error1.js";
import {
  apiV1MiscFacebookPages403Error1Schema,
  type ApiV1MiscFacebookPages403Error1,
} from "../models/api-v1-misc-facebook-pages403-error1.js";
import {
  apiV1MiscFacebookPages404Error1Schema,
  type ApiV1MiscFacebookPages404Error1,
} from "../models/api-v1-misc-facebook-pages404-error1.js";
import {
  apiV1MiscFacebookPages429Error1Schema,
  type ApiV1MiscFacebookPages429Error1,
} from "../models/api-v1-misc-facebook-pages429-error1.js";
import {
  apiV1MiscFacebookPages500Error1Schema,
  type ApiV1MiscFacebookPages500Error1,
} from "../models/api-v1-misc-facebook-pages500-error1.js";
import {
  apiV1MiscFacebookPages502Error1Schema,
  type ApiV1MiscFacebookPages502Error1,
} from "../models/api-v1-misc-facebook-pages502-error1.js";
import {
  apiV1MiscFacebookPages503Error1Schema,
  type ApiV1MiscFacebookPages503Error1,
} from "../models/api-v1-misc-facebook-pages503-error1.js";
import {
  apiV1MiscFacebookPages504Error1Schema,
  type ApiV1MiscFacebookPages504Error1,
} from "../models/api-v1-misc-facebook-pages504-error1.js";
import {
  apiV1MiscFacebookPostRequestSchema,
  type ApiV1MiscFacebookPostRequest,
} from "../models/api-v1-misc-facebook-post-request.js";
import {
  apiV1MiscFacebookPostRequest1Schema,
  type ApiV1MiscFacebookPostRequest1,
} from "../models/api-v1-misc-facebook-post-request1.js";
import {
  apiV1MiscFacebookPostResponseSchema,
  type ApiV1MiscFacebookPostResponse,
} from "../models/api-v1-misc-facebook-post-response.js";
import {
  apiV1MiscFacebookPostResponse1Schema,
  type ApiV1MiscFacebookPostResponse1,
} from "../models/api-v1-misc-facebook-post-response1.js";
import {
  apiV1MiscFacebookPost400Error1Schema,
  type ApiV1MiscFacebookPost400Error1,
} from "../models/api-v1-misc-facebook-post400-error1.js";
import {
  apiV1MiscFacebookPost401Error1Schema,
  type ApiV1MiscFacebookPost401Error1,
} from "../models/api-v1-misc-facebook-post401-error1.js";
import {
  apiV1MiscFacebookPost403Error1Schema,
  type ApiV1MiscFacebookPost403Error1,
} from "../models/api-v1-misc-facebook-post403-error1.js";
import {
  apiV1MiscFacebookPost404Error1Schema,
  type ApiV1MiscFacebookPost404Error1,
} from "../models/api-v1-misc-facebook-post404-error1.js";
import {
  apiV1MiscFacebookPost429Error1Schema,
  type ApiV1MiscFacebookPost429Error1,
} from "../models/api-v1-misc-facebook-post429-error1.js";
import {
  apiV1MiscFacebookPost500Error1Schema,
  type ApiV1MiscFacebookPost500Error1,
} from "../models/api-v1-misc-facebook-post500-error1.js";
import {
  apiV1MiscFacebookPost502Error1Schema,
  type ApiV1MiscFacebookPost502Error1,
} from "../models/api-v1-misc-facebook-post502-error1.js";
import {
  apiV1MiscFacebookPost503Error1Schema,
  type ApiV1MiscFacebookPost503Error1,
} from "../models/api-v1-misc-facebook-post503-error1.js";
import {
  apiV1MiscFacebookPost504Error1Schema,
  type ApiV1MiscFacebookPost504Error1,
} from "../models/api-v1-misc-facebook-post504-error1.js";
import {
  apiV1MiscFacebookRecommendationsCommentsReplyRequestInternalSchema,
  type ApiV1MiscFacebookRecommendationsCommentsReplyRequest,
} from "../models/api-v1-misc-facebook-recommendations-comments-reply-request.js";
import {
  apiV1MiscFacebookRecommendationsCommentsReplyResponseSchema,
  type ApiV1MiscFacebookRecommendationsCommentsReplyResponse,
} from "../models/api-v1-misc-facebook-recommendations-comments-reply-response.js";
import {
  apiV1MiscFacebookRecommendationsCommentsReply400Error1Schema,
  type ApiV1MiscFacebookRecommendationsCommentsReply400Error1,
} from "../models/api-v1-misc-facebook-recommendations-comments-reply400-error1.js";
import {
  apiV1MiscFacebookRecommendationsCommentsReply401Error1Schema,
  type ApiV1MiscFacebookRecommendationsCommentsReply401Error1,
} from "../models/api-v1-misc-facebook-recommendations-comments-reply401-error1.js";
import {
  apiV1MiscFacebookRecommendationsCommentsReply403Error1Schema,
  type ApiV1MiscFacebookRecommendationsCommentsReply403Error1,
} from "../models/api-v1-misc-facebook-recommendations-comments-reply403-error1.js";
import {
  apiV1MiscFacebookRecommendationsCommentsReply404Error1Schema,
  type ApiV1MiscFacebookRecommendationsCommentsReply404Error1,
} from "../models/api-v1-misc-facebook-recommendations-comments-reply404-error1.js";
import {
  apiV1MiscFacebookRecommendationsCommentsReply429Error1Schema,
  type ApiV1MiscFacebookRecommendationsCommentsReply429Error1,
} from "../models/api-v1-misc-facebook-recommendations-comments-reply429-error1.js";
import {
  apiV1MiscFacebookRecommendationsCommentsReply500Error1Schema,
  type ApiV1MiscFacebookRecommendationsCommentsReply500Error1,
} from "../models/api-v1-misc-facebook-recommendations-comments-reply500-error1.js";
import {
  apiV1MiscFacebookRecommendationsCommentsReply502Error1Schema,
  type ApiV1MiscFacebookRecommendationsCommentsReply502Error1,
} from "../models/api-v1-misc-facebook-recommendations-comments-reply502-error1.js";
import {
  apiV1MiscFacebookRecommendationsCommentsReply503Error1Schema,
  type ApiV1MiscFacebookRecommendationsCommentsReply503Error1,
} from "../models/api-v1-misc-facebook-recommendations-comments-reply503-error1.js";
import {
  apiV1MiscFacebookRecommendationsCommentsReply504Error1Schema,
  type ApiV1MiscFacebookRecommendationsCommentsReply504Error1,
} from "../models/api-v1-misc-facebook-recommendations-comments-reply504-error1.js";
import {
  apiV1MiscFacebookRecommendationsCommentsResponseSchema,
  type ApiV1MiscFacebookRecommendationsCommentsResponse,
} from "../models/api-v1-misc-facebook-recommendations-comments-response.js";
import {
  apiV1MiscFacebookRecommendationsComments400Error1Schema,
  type ApiV1MiscFacebookRecommendationsComments400Error1,
} from "../models/api-v1-misc-facebook-recommendations-comments400-error1.js";
import {
  apiV1MiscFacebookRecommendationsComments401Error1Schema,
  type ApiV1MiscFacebookRecommendationsComments401Error1,
} from "../models/api-v1-misc-facebook-recommendations-comments401-error1.js";
import {
  apiV1MiscFacebookRecommendationsComments403Error1Schema,
  type ApiV1MiscFacebookRecommendationsComments403Error1,
} from "../models/api-v1-misc-facebook-recommendations-comments403-error1.js";
import {
  apiV1MiscFacebookRecommendationsComments404Error1Schema,
  type ApiV1MiscFacebookRecommendationsComments404Error1,
} from "../models/api-v1-misc-facebook-recommendations-comments404-error1.js";
import {
  apiV1MiscFacebookRecommendationsComments429Error1Schema,
  type ApiV1MiscFacebookRecommendationsComments429Error1,
} from "../models/api-v1-misc-facebook-recommendations-comments429-error1.js";
import {
  apiV1MiscFacebookRecommendationsComments500Error1Schema,
  type ApiV1MiscFacebookRecommendationsComments500Error1,
} from "../models/api-v1-misc-facebook-recommendations-comments500-error1.js";
import {
  apiV1MiscFacebookRecommendationsComments502Error1Schema,
  type ApiV1MiscFacebookRecommendationsComments502Error1,
} from "../models/api-v1-misc-facebook-recommendations-comments502-error1.js";
import {
  apiV1MiscFacebookRecommendationsComments503Error1Schema,
  type ApiV1MiscFacebookRecommendationsComments503Error1,
} from "../models/api-v1-misc-facebook-recommendations-comments503-error1.js";
import {
  apiV1MiscFacebookRecommendationsComments504Error1Schema,
  type ApiV1MiscFacebookRecommendationsComments504Error1,
} from "../models/api-v1-misc-facebook-recommendations-comments504-error1.js";
import {
  apiV1MiscFacebookRecommendationsImportRequestInternalSchema,
  type ApiV1MiscFacebookRecommendationsImportRequest,
} from "../models/api-v1-misc-facebook-recommendations-import-request.js";
import {
  apiV1MiscFacebookRecommendationsImportResponseSchema,
  type ApiV1MiscFacebookRecommendationsImportResponse,
} from "../models/api-v1-misc-facebook-recommendations-import-response.js";
import {
  apiV1MiscFacebookRecommendationsImportResponse1Schema,
  type ApiV1MiscFacebookRecommendationsImportResponse1,
} from "../models/api-v1-misc-facebook-recommendations-import-response1.js";
import {
  apiV1MiscFacebookRecommendationsImport400Error1Schema,
  type ApiV1MiscFacebookRecommendationsImport400Error1,
} from "../models/api-v1-misc-facebook-recommendations-import400-error1.js";
import {
  apiV1MiscFacebookRecommendationsImport401Error1Schema,
  type ApiV1MiscFacebookRecommendationsImport401Error1,
} from "../models/api-v1-misc-facebook-recommendations-import401-error1.js";
import {
  apiV1MiscFacebookRecommendationsImport403Error1Schema,
  type ApiV1MiscFacebookRecommendationsImport403Error1,
} from "../models/api-v1-misc-facebook-recommendations-import403-error1.js";
import {
  apiV1MiscFacebookRecommendationsImport404Error1Schema,
  type ApiV1MiscFacebookRecommendationsImport404Error1,
} from "../models/api-v1-misc-facebook-recommendations-import404-error1.js";
import {
  apiV1MiscFacebookRecommendationsImport409Error1Schema,
  type ApiV1MiscFacebookRecommendationsImport409Error1,
} from "../models/api-v1-misc-facebook-recommendations-import409-error1.js";
import {
  apiV1MiscFacebookRecommendationsImport429Error1Schema,
  type ApiV1MiscFacebookRecommendationsImport429Error1,
} from "../models/api-v1-misc-facebook-recommendations-import429-error1.js";
import {
  apiV1MiscFacebookRecommendationsImport500Error1Schema,
  type ApiV1MiscFacebookRecommendationsImport500Error1,
} from "../models/api-v1-misc-facebook-recommendations-import500-error1.js";
import {
  apiV1MiscFacebookRecommendationsImport502Error1Schema,
  type ApiV1MiscFacebookRecommendationsImport502Error1,
} from "../models/api-v1-misc-facebook-recommendations-import502-error1.js";
import {
  apiV1MiscFacebookRecommendationsImport503Error1Schema,
  type ApiV1MiscFacebookRecommendationsImport503Error1,
} from "../models/api-v1-misc-facebook-recommendations-import503-error1.js";
import {
  apiV1MiscFacebookRecommendationsImport504Error1Schema,
  type ApiV1MiscFacebookRecommendationsImport504Error1,
} from "../models/api-v1-misc-facebook-recommendations-import504-error1.js";
import {
  apiV1MiscFacebookRecommendationsReplyRequestInternalSchema,
  type ApiV1MiscFacebookRecommendationsReplyRequest,
} from "../models/api-v1-misc-facebook-recommendations-reply-request.js";
import {
  apiV1MiscFacebookRecommendationsReplyResponseSchema,
  type ApiV1MiscFacebookRecommendationsReplyResponse,
} from "../models/api-v1-misc-facebook-recommendations-reply-response.js";
import {
  apiV1MiscFacebookRecommendationsReply400Error1Schema,
  type ApiV1MiscFacebookRecommendationsReply400Error1,
} from "../models/api-v1-misc-facebook-recommendations-reply400-error1.js";
import {
  apiV1MiscFacebookRecommendationsReply401Error1Schema,
  type ApiV1MiscFacebookRecommendationsReply401Error1,
} from "../models/api-v1-misc-facebook-recommendations-reply401-error1.js";
import {
  apiV1MiscFacebookRecommendationsReply403Error1Schema,
  type ApiV1MiscFacebookRecommendationsReply403Error1,
} from "../models/api-v1-misc-facebook-recommendations-reply403-error1.js";
import {
  apiV1MiscFacebookRecommendationsReply404Error1Schema,
  type ApiV1MiscFacebookRecommendationsReply404Error1,
} from "../models/api-v1-misc-facebook-recommendations-reply404-error1.js";
import {
  apiV1MiscFacebookRecommendationsReply429Error1Schema,
  type ApiV1MiscFacebookRecommendationsReply429Error1,
} from "../models/api-v1-misc-facebook-recommendations-reply429-error1.js";
import {
  apiV1MiscFacebookRecommendationsReply500Error1Schema,
  type ApiV1MiscFacebookRecommendationsReply500Error1,
} from "../models/api-v1-misc-facebook-recommendations-reply500-error1.js";
import {
  apiV1MiscFacebookRecommendationsReply502Error1Schema,
  type ApiV1MiscFacebookRecommendationsReply502Error1,
} from "../models/api-v1-misc-facebook-recommendations-reply502-error1.js";
import {
  apiV1MiscFacebookRecommendationsReply503Error1Schema,
  type ApiV1MiscFacebookRecommendationsReply503Error1,
} from "../models/api-v1-misc-facebook-recommendations-reply503-error1.js";
import {
  apiV1MiscFacebookRecommendationsReply504Error1Schema,
  type ApiV1MiscFacebookRecommendationsReply504Error1,
} from "../models/api-v1-misc-facebook-recommendations-reply504-error1.js";
import {
  apiV1MiscFacebookRecommendationsResponseSchema,
  type ApiV1MiscFacebookRecommendationsResponse,
} from "../models/api-v1-misc-facebook-recommendations-response.js";
import {
  apiV1MiscFacebookRecommendationsResponse1Schema,
  type ApiV1MiscFacebookRecommendationsResponse1,
} from "../models/api-v1-misc-facebook-recommendations-response1.js";
import {
  apiV1MiscFacebookRecommendations400Error1Schema,
  type ApiV1MiscFacebookRecommendations400Error1,
} from "../models/api-v1-misc-facebook-recommendations400-error1.js";
import {
  apiV1MiscFacebookRecommendations401Error1Schema,
  type ApiV1MiscFacebookRecommendations401Error1,
} from "../models/api-v1-misc-facebook-recommendations401-error1.js";
import {
  apiV1MiscFacebookRecommendations403Error1Schema,
  type ApiV1MiscFacebookRecommendations403Error1,
} from "../models/api-v1-misc-facebook-recommendations403-error1.js";
import {
  apiV1MiscFacebookRecommendations404Error1Schema,
  type ApiV1MiscFacebookRecommendations404Error1,
} from "../models/api-v1-misc-facebook-recommendations404-error1.js";
import {
  apiV1MiscFacebookRecommendations429Error1Schema,
  type ApiV1MiscFacebookRecommendations429Error1,
} from "../models/api-v1-misc-facebook-recommendations429-error1.js";
import {
  apiV1MiscFacebookRecommendations500Error1Schema,
  type ApiV1MiscFacebookRecommendations500Error1,
} from "../models/api-v1-misc-facebook-recommendations500-error1.js";
import {
  apiV1MiscFacebookRecommendations502Error1Schema,
  type ApiV1MiscFacebookRecommendations502Error1,
} from "../models/api-v1-misc-facebook-recommendations502-error1.js";
import {
  apiV1MiscFacebookRecommendations503Error1Schema,
  type ApiV1MiscFacebookRecommendations503Error1,
} from "../models/api-v1-misc-facebook-recommendations503-error1.js";
import {
  apiV1MiscFacebookRecommendations504Error1Schema,
  type ApiV1MiscFacebookRecommendations504Error1,
} from "../models/api-v1-misc-facebook-recommendations504-error1.js";
import {
  apiV1MiscFacebookTextFormatPresetsResponseSchema,
  type ApiV1MiscFacebookTextFormatPresetsResponse,
} from "../models/api-v1-misc-facebook-text-format-presets-response.js";
import {
  apiV1MiscFacebookTextFormatPresets400Error1Schema,
  type ApiV1MiscFacebookTextFormatPresets400Error1,
} from "../models/api-v1-misc-facebook-text-format-presets400-error1.js";
import {
  apiV1MiscFacebookTextFormatPresets401Error1Schema,
  type ApiV1MiscFacebookTextFormatPresets401Error1,
} from "../models/api-v1-misc-facebook-text-format-presets401-error1.js";
import {
  apiV1MiscFacebookTextFormatPresets403Error1Schema,
  type ApiV1MiscFacebookTextFormatPresets403Error1,
} from "../models/api-v1-misc-facebook-text-format-presets403-error1.js";
import {
  apiV1MiscFacebookTextFormatPresets404Error1Schema,
  type ApiV1MiscFacebookTextFormatPresets404Error1,
} from "../models/api-v1-misc-facebook-text-format-presets404-error1.js";
import {
  apiV1MiscFacebookTextFormatPresets429Error1Schema,
  type ApiV1MiscFacebookTextFormatPresets429Error1,
} from "../models/api-v1-misc-facebook-text-format-presets429-error1.js";
import {
  apiV1MiscFacebookTextFormatPresets500Error1Schema,
  type ApiV1MiscFacebookTextFormatPresets500Error1,
} from "../models/api-v1-misc-facebook-text-format-presets500-error1.js";
import {
  apiV1MiscFacebookTextFormatPresets502Error1Schema,
  type ApiV1MiscFacebookTextFormatPresets502Error1,
} from "../models/api-v1-misc-facebook-text-format-presets502-error1.js";
import {
  apiV1MiscFacebookTextFormatPresets503Error1Schema,
  type ApiV1MiscFacebookTextFormatPresets503Error1,
} from "../models/api-v1-misc-facebook-text-format-presets503-error1.js";
import {
  apiV1MiscFacebookTextFormatPresets504Error1Schema,
  type ApiV1MiscFacebookTextFormatPresets504Error1,
} from "../models/api-v1-misc-facebook-text-format-presets504-error1.js";
import {
  apiV1MiscFacebookTokenDebugResponseSchema,
  type ApiV1MiscFacebookTokenDebugResponse,
} from "../models/api-v1-misc-facebook-token-debug-response.js";
import {
  apiV1MiscFacebookTokenDebug400Error1Schema,
  type ApiV1MiscFacebookTokenDebug400Error1,
} from "../models/api-v1-misc-facebook-token-debug400-error1.js";
import {
  apiV1MiscFacebookTokenDebug401Error1Schema,
  type ApiV1MiscFacebookTokenDebug401Error1,
} from "../models/api-v1-misc-facebook-token-debug401-error1.js";
import {
  apiV1MiscFacebookTokenDebug403Error1Schema,
  type ApiV1MiscFacebookTokenDebug403Error1,
} from "../models/api-v1-misc-facebook-token-debug403-error1.js";
import {
  apiV1MiscFacebookTokenDebug404Error1Schema,
  type ApiV1MiscFacebookTokenDebug404Error1,
} from "../models/api-v1-misc-facebook-token-debug404-error1.js";
import {
  apiV1MiscFacebookTokenDebug429Error1Schema,
  type ApiV1MiscFacebookTokenDebug429Error1,
} from "../models/api-v1-misc-facebook-token-debug429-error1.js";
import {
  apiV1MiscFacebookTokenDebug500Error1Schema,
  type ApiV1MiscFacebookTokenDebug500Error1,
} from "../models/api-v1-misc-facebook-token-debug500-error1.js";
import {
  apiV1MiscFacebookTokenDebug502Error1Schema,
  type ApiV1MiscFacebookTokenDebug502Error1,
} from "../models/api-v1-misc-facebook-token-debug502-error1.js";
import {
  apiV1MiscFacebookTokenDebug503Error1Schema,
  type ApiV1MiscFacebookTokenDebug503Error1,
} from "../models/api-v1-misc-facebook-token-debug503-error1.js";
import {
  apiV1MiscFacebookTokenDebug504Error1Schema,
  type ApiV1MiscFacebookTokenDebug504Error1,
} from "../models/api-v1-misc-facebook-token-debug504-error1.js";
import {
  apiV1MiscGoogleBusinessLocationAttributesAvailableResponseSchema,
  type ApiV1MiscGoogleBusinessLocationAttributesAvailableResponse,
} from "../models/api-v1-misc-google-business-location-attributes-available-response.js";
import {
  apiV1MiscGoogleBusinessLocationAttributesAvailable400Error1Schema,
  type ApiV1MiscGoogleBusinessLocationAttributesAvailable400Error1,
} from "../models/api-v1-misc-google-business-location-attributes-available400-error1.js";
import {
  apiV1MiscGoogleBusinessLocationAttributesAvailable401Error1Schema,
  type ApiV1MiscGoogleBusinessLocationAttributesAvailable401Error1,
} from "../models/api-v1-misc-google-business-location-attributes-available401-error1.js";
import {
  apiV1MiscGoogleBusinessLocationAttributesAvailable403Error1Schema,
  type ApiV1MiscGoogleBusinessLocationAttributesAvailable403Error1,
} from "../models/api-v1-misc-google-business-location-attributes-available403-error1.js";
import {
  apiV1MiscGoogleBusinessLocationAttributesAvailable404Error1Schema,
  type ApiV1MiscGoogleBusinessLocationAttributesAvailable404Error1,
} from "../models/api-v1-misc-google-business-location-attributes-available404-error1.js";
import {
  apiV1MiscGoogleBusinessLocationAttributesAvailable429Error1Schema,
  type ApiV1MiscGoogleBusinessLocationAttributesAvailable429Error1,
} from "../models/api-v1-misc-google-business-location-attributes-available429-error1.js";
import {
  apiV1MiscGoogleBusinessLocationAttributesAvailable500Error1Schema,
  type ApiV1MiscGoogleBusinessLocationAttributesAvailable500Error1,
} from "../models/api-v1-misc-google-business-location-attributes-available500-error1.js";
import {
  apiV1MiscGoogleBusinessLocationAttributesAvailable502Error1Schema,
  type ApiV1MiscGoogleBusinessLocationAttributesAvailable502Error1,
} from "../models/api-v1-misc-google-business-location-attributes-available502-error1.js";
import {
  apiV1MiscGoogleBusinessLocationAttributesAvailable503Error1Schema,
  type ApiV1MiscGoogleBusinessLocationAttributesAvailable503Error1,
} from "../models/api-v1-misc-google-business-location-attributes-available503-error1.js";
import {
  apiV1MiscGoogleBusinessLocationAttributesAvailable504Error1Schema,
  type ApiV1MiscGoogleBusinessLocationAttributesAvailable504Error1,
} from "../models/api-v1-misc-google-business-location-attributes-available504-error1.js";
import {
  apiV1MiscGoogleBusinessLocationAttributesRequestInternalSchema,
  type ApiV1MiscGoogleBusinessLocationAttributesRequest,
} from "../models/api-v1-misc-google-business-location-attributes-request.js";
import {
  apiV1MiscGoogleBusinessLocationAttributesResponseSchema,
  type ApiV1MiscGoogleBusinessLocationAttributesResponse,
} from "../models/api-v1-misc-google-business-location-attributes-response.js";
import {
  apiV1MiscGoogleBusinessLocationAttributes400Error1Schema,
  type ApiV1MiscGoogleBusinessLocationAttributes400Error1,
} from "../models/api-v1-misc-google-business-location-attributes400-error1.js";
import {
  apiV1MiscGoogleBusinessLocationAttributes401Error1Schema,
  type ApiV1MiscGoogleBusinessLocationAttributes401Error1,
} from "../models/api-v1-misc-google-business-location-attributes401-error1.js";
import {
  apiV1MiscGoogleBusinessLocationAttributes403Error1Schema,
  type ApiV1MiscGoogleBusinessLocationAttributes403Error1,
} from "../models/api-v1-misc-google-business-location-attributes403-error1.js";
import {
  apiV1MiscGoogleBusinessLocationAttributes404Error1Schema,
  type ApiV1MiscGoogleBusinessLocationAttributes404Error1,
} from "../models/api-v1-misc-google-business-location-attributes404-error1.js";
import {
  apiV1MiscGoogleBusinessLocationAttributes429Error1Schema,
  type ApiV1MiscGoogleBusinessLocationAttributes429Error1,
} from "../models/api-v1-misc-google-business-location-attributes429-error1.js";
import {
  apiV1MiscGoogleBusinessLocationAttributes500Error1Schema,
  type ApiV1MiscGoogleBusinessLocationAttributes500Error1,
} from "../models/api-v1-misc-google-business-location-attributes500-error1.js";
import {
  apiV1MiscGoogleBusinessLocationAttributes502Error1Schema,
  type ApiV1MiscGoogleBusinessLocationAttributes502Error1,
} from "../models/api-v1-misc-google-business-location-attributes502-error1.js";
import {
  apiV1MiscGoogleBusinessLocationAttributes503Error1Schema,
  type ApiV1MiscGoogleBusinessLocationAttributes503Error1,
} from "../models/api-v1-misc-google-business-location-attributes503-error1.js";
import {
  apiV1MiscGoogleBusinessLocationAttributes504Error1Schema,
  type ApiV1MiscGoogleBusinessLocationAttributes504Error1,
} from "../models/api-v1-misc-google-business-location-attributes504-error1.js";
import {
  apiV1MiscGoogleBusinessLocationCategoriesAvailableResponseSchema,
  type ApiV1MiscGoogleBusinessLocationCategoriesAvailableResponse,
} from "../models/api-v1-misc-google-business-location-categories-available-response.js";
import {
  apiV1MiscGoogleBusinessLocationCategoriesAvailable400Error1Schema,
  type ApiV1MiscGoogleBusinessLocationCategoriesAvailable400Error1,
} from "../models/api-v1-misc-google-business-location-categories-available400-error1.js";
import {
  apiV1MiscGoogleBusinessLocationCategoriesAvailable401Error1Schema,
  type ApiV1MiscGoogleBusinessLocationCategoriesAvailable401Error1,
} from "../models/api-v1-misc-google-business-location-categories-available401-error1.js";
import {
  apiV1MiscGoogleBusinessLocationCategoriesAvailable403Error1Schema,
  type ApiV1MiscGoogleBusinessLocationCategoriesAvailable403Error1,
} from "../models/api-v1-misc-google-business-location-categories-available403-error1.js";
import {
  apiV1MiscGoogleBusinessLocationCategoriesAvailable404Error1Schema,
  type ApiV1MiscGoogleBusinessLocationCategoriesAvailable404Error1,
} from "../models/api-v1-misc-google-business-location-categories-available404-error1.js";
import {
  apiV1MiscGoogleBusinessLocationCategoriesAvailable429Error1Schema,
  type ApiV1MiscGoogleBusinessLocationCategoriesAvailable429Error1,
} from "../models/api-v1-misc-google-business-location-categories-available429-error1.js";
import {
  apiV1MiscGoogleBusinessLocationCategoriesAvailable500Error1Schema,
  type ApiV1MiscGoogleBusinessLocationCategoriesAvailable500Error1,
} from "../models/api-v1-misc-google-business-location-categories-available500-error1.js";
import {
  apiV1MiscGoogleBusinessLocationCategoriesAvailable502Error1Schema,
  type ApiV1MiscGoogleBusinessLocationCategoriesAvailable502Error1,
} from "../models/api-v1-misc-google-business-location-categories-available502-error1.js";
import {
  apiV1MiscGoogleBusinessLocationCategoriesAvailable503Error1Schema,
  type ApiV1MiscGoogleBusinessLocationCategoriesAvailable503Error1,
} from "../models/api-v1-misc-google-business-location-categories-available503-error1.js";
import {
  apiV1MiscGoogleBusinessLocationCategoriesAvailable504Error1Schema,
  type ApiV1MiscGoogleBusinessLocationCategoriesAvailable504Error1,
} from "../models/api-v1-misc-google-business-location-categories-available504-error1.js";
import {
  apiV1MiscGoogleBusinessLocationFoodMenusRequestInternalSchema,
  type ApiV1MiscGoogleBusinessLocationFoodMenusRequest,
} from "../models/api-v1-misc-google-business-location-food-menus-request.js";
import {
  apiV1MiscGoogleBusinessLocationFoodMenusResponseSchema,
  type ApiV1MiscGoogleBusinessLocationFoodMenusResponse,
} from "../models/api-v1-misc-google-business-location-food-menus-response.js";
import {
  apiV1MiscGoogleBusinessLocationFoodMenus400Error1Schema,
  type ApiV1MiscGoogleBusinessLocationFoodMenus400Error1,
} from "../models/api-v1-misc-google-business-location-food-menus400-error1.js";
import {
  apiV1MiscGoogleBusinessLocationFoodMenus401Error1Schema,
  type ApiV1MiscGoogleBusinessLocationFoodMenus401Error1,
} from "../models/api-v1-misc-google-business-location-food-menus401-error1.js";
import {
  apiV1MiscGoogleBusinessLocationFoodMenus403Error1Schema,
  type ApiV1MiscGoogleBusinessLocationFoodMenus403Error1,
} from "../models/api-v1-misc-google-business-location-food-menus403-error1.js";
import {
  apiV1MiscGoogleBusinessLocationFoodMenus404Error1Schema,
  type ApiV1MiscGoogleBusinessLocationFoodMenus404Error1,
} from "../models/api-v1-misc-google-business-location-food-menus404-error1.js";
import {
  apiV1MiscGoogleBusinessLocationFoodMenus429Error1Schema,
  type ApiV1MiscGoogleBusinessLocationFoodMenus429Error1,
} from "../models/api-v1-misc-google-business-location-food-menus429-error1.js";
import {
  apiV1MiscGoogleBusinessLocationFoodMenus500Error1Schema,
  type ApiV1MiscGoogleBusinessLocationFoodMenus500Error1,
} from "../models/api-v1-misc-google-business-location-food-menus500-error1.js";
import {
  apiV1MiscGoogleBusinessLocationFoodMenus502Error1Schema,
  type ApiV1MiscGoogleBusinessLocationFoodMenus502Error1,
} from "../models/api-v1-misc-google-business-location-food-menus502-error1.js";
import {
  apiV1MiscGoogleBusinessLocationFoodMenus503Error1Schema,
  type ApiV1MiscGoogleBusinessLocationFoodMenus503Error1,
} from "../models/api-v1-misc-google-business-location-food-menus503-error1.js";
import {
  apiV1MiscGoogleBusinessLocationFoodMenus504Error1Schema,
  type ApiV1MiscGoogleBusinessLocationFoodMenus504Error1,
} from "../models/api-v1-misc-google-business-location-food-menus504-error1.js";
import {
  apiV1MiscGoogleBusinessLocationHoursRequestInternalSchema,
  type ApiV1MiscGoogleBusinessLocationHoursRequest,
} from "../models/api-v1-misc-google-business-location-hours-request.js";
import {
  apiV1MiscGoogleBusinessLocationHoursResponseSchema,
  type ApiV1MiscGoogleBusinessLocationHoursResponse,
} from "../models/api-v1-misc-google-business-location-hours-response.js";
import {
  apiV1MiscGoogleBusinessLocationHours400Error1Schema,
  type ApiV1MiscGoogleBusinessLocationHours400Error1,
} from "../models/api-v1-misc-google-business-location-hours400-error1.js";
import {
  apiV1MiscGoogleBusinessLocationHours401Error1Schema,
  type ApiV1MiscGoogleBusinessLocationHours401Error1,
} from "../models/api-v1-misc-google-business-location-hours401-error1.js";
import {
  apiV1MiscGoogleBusinessLocationHours403Error1Schema,
  type ApiV1MiscGoogleBusinessLocationHours403Error1,
} from "../models/api-v1-misc-google-business-location-hours403-error1.js";
import {
  apiV1MiscGoogleBusinessLocationHours404Error1Schema,
  type ApiV1MiscGoogleBusinessLocationHours404Error1,
} from "../models/api-v1-misc-google-business-location-hours404-error1.js";
import {
  apiV1MiscGoogleBusinessLocationHours429Error1Schema,
  type ApiV1MiscGoogleBusinessLocationHours429Error1,
} from "../models/api-v1-misc-google-business-location-hours429-error1.js";
import {
  apiV1MiscGoogleBusinessLocationHours500Error1Schema,
  type ApiV1MiscGoogleBusinessLocationHours500Error1,
} from "../models/api-v1-misc-google-business-location-hours500-error1.js";
import {
  apiV1MiscGoogleBusinessLocationHours502Error1Schema,
  type ApiV1MiscGoogleBusinessLocationHours502Error1,
} from "../models/api-v1-misc-google-business-location-hours502-error1.js";
import {
  apiV1MiscGoogleBusinessLocationHours503Error1Schema,
  type ApiV1MiscGoogleBusinessLocationHours503Error1,
} from "../models/api-v1-misc-google-business-location-hours503-error1.js";
import {
  apiV1MiscGoogleBusinessLocationHours504Error1Schema,
  type ApiV1MiscGoogleBusinessLocationHours504Error1,
} from "../models/api-v1-misc-google-business-location-hours504-error1.js";
import {
  apiV1MiscGoogleBusinessLocationPlaceActionLinksRequestInternalSchema,
  type ApiV1MiscGoogleBusinessLocationPlaceActionLinksRequest,
} from "../models/api-v1-misc-google-business-location-place-action-links-request.js";
import {
  apiV1MiscGoogleBusinessLocationPlaceActionLinksRequest1InternalSchema,
  type ApiV1MiscGoogleBusinessLocationPlaceActionLinksRequest1,
} from "../models/api-v1-misc-google-business-location-place-action-links-request1.js";
import {
  apiV1MiscGoogleBusinessLocationPlaceActionLinksRequest2Schema,
  type ApiV1MiscGoogleBusinessLocationPlaceActionLinksRequest2,
} from "../models/api-v1-misc-google-business-location-place-action-links-request2.js";
import {
  apiV1MiscGoogleBusinessLocationPlaceActionLinksResponseInternalSchema,
  type ApiV1MiscGoogleBusinessLocationPlaceActionLinksResponse,
} from "../models/api-v1-misc-google-business-location-place-action-links-response.js";
import {
  apiV1MiscGoogleBusinessLocationPlaceActionLinksResponse1InternalSchema,
  type ApiV1MiscGoogleBusinessLocationPlaceActionLinksResponse1,
} from "../models/api-v1-misc-google-business-location-place-action-links-response1.js";
import {
  apiV1MiscGoogleBusinessLocationPlaceActionLinksResponse3Schema,
  type ApiV1MiscGoogleBusinessLocationPlaceActionLinksResponse3,
} from "../models/api-v1-misc-google-business-location-place-action-links-response3.js";
import {
  apiV1MiscGoogleBusinessLocationPlaceActionLinks400Error1Schema,
  type ApiV1MiscGoogleBusinessLocationPlaceActionLinks400Error1,
} from "../models/api-v1-misc-google-business-location-place-action-links400-error1.js";
import {
  apiV1MiscGoogleBusinessLocationPlaceActionLinks401Error1Schema,
  type ApiV1MiscGoogleBusinessLocationPlaceActionLinks401Error1,
} from "../models/api-v1-misc-google-business-location-place-action-links401-error1.js";
import {
  apiV1MiscGoogleBusinessLocationPlaceActionLinks403Error1Schema,
  type ApiV1MiscGoogleBusinessLocationPlaceActionLinks403Error1,
} from "../models/api-v1-misc-google-business-location-place-action-links403-error1.js";
import {
  apiV1MiscGoogleBusinessLocationPlaceActionLinks404Error1Schema,
  type ApiV1MiscGoogleBusinessLocationPlaceActionLinks404Error1,
} from "../models/api-v1-misc-google-business-location-place-action-links404-error1.js";
import {
  apiV1MiscGoogleBusinessLocationPlaceActionLinks429Error1Schema,
  type ApiV1MiscGoogleBusinessLocationPlaceActionLinks429Error1,
} from "../models/api-v1-misc-google-business-location-place-action-links429-error1.js";
import {
  apiV1MiscGoogleBusinessLocationPlaceActionLinks500Error1Schema,
  type ApiV1MiscGoogleBusinessLocationPlaceActionLinks500Error1,
} from "../models/api-v1-misc-google-business-location-place-action-links500-error1.js";
import {
  apiV1MiscGoogleBusinessLocationPlaceActionLinks502Error1Schema,
  type ApiV1MiscGoogleBusinessLocationPlaceActionLinks502Error1,
} from "../models/api-v1-misc-google-business-location-place-action-links502-error1.js";
import {
  apiV1MiscGoogleBusinessLocationPlaceActionLinks503Error1Schema,
  type ApiV1MiscGoogleBusinessLocationPlaceActionLinks503Error1,
} from "../models/api-v1-misc-google-business-location-place-action-links503-error1.js";
import {
  apiV1MiscGoogleBusinessLocationPlaceActionLinks504Error1Schema,
  type ApiV1MiscGoogleBusinessLocationPlaceActionLinks504Error1,
} from "../models/api-v1-misc-google-business-location-place-action-links504-error1.js";
import {
  apiV1MiscGoogleBusinessLocationRequestInternalSchema,
  type ApiV1MiscGoogleBusinessLocationRequest,
} from "../models/api-v1-misc-google-business-location-request.js";
import {
  apiV1MiscGoogleBusinessLocationResponseSchema,
  type ApiV1MiscGoogleBusinessLocationResponse,
} from "../models/api-v1-misc-google-business-location-response.js";
import {
  apiV1MiscGoogleBusinessLocationSearchKeywordsResponseInternalSchema,
  type ApiV1MiscGoogleBusinessLocationSearchKeywordsResponse,
} from "../models/api-v1-misc-google-business-location-search-keywords-response.js";
import {
  apiV1MiscGoogleBusinessLocationSearchKeywords400Error1Schema,
  type ApiV1MiscGoogleBusinessLocationSearchKeywords400Error1,
} from "../models/api-v1-misc-google-business-location-search-keywords400-error1.js";
import {
  apiV1MiscGoogleBusinessLocationSearchKeywords401Error1Schema,
  type ApiV1MiscGoogleBusinessLocationSearchKeywords401Error1,
} from "../models/api-v1-misc-google-business-location-search-keywords401-error1.js";
import {
  apiV1MiscGoogleBusinessLocationSearchKeywords403Error1Schema,
  type ApiV1MiscGoogleBusinessLocationSearchKeywords403Error1,
} from "../models/api-v1-misc-google-business-location-search-keywords403-error1.js";
import {
  apiV1MiscGoogleBusinessLocationSearchKeywords404Error1Schema,
  type ApiV1MiscGoogleBusinessLocationSearchKeywords404Error1,
} from "../models/api-v1-misc-google-business-location-search-keywords404-error1.js";
import {
  apiV1MiscGoogleBusinessLocationSearchKeywords429Error1Schema,
  type ApiV1MiscGoogleBusinessLocationSearchKeywords429Error1,
} from "../models/api-v1-misc-google-business-location-search-keywords429-error1.js";
import {
  apiV1MiscGoogleBusinessLocationSearchKeywords500Error1Schema,
  type ApiV1MiscGoogleBusinessLocationSearchKeywords500Error1,
} from "../models/api-v1-misc-google-business-location-search-keywords500-error1.js";
import {
  apiV1MiscGoogleBusinessLocationSearchKeywords502Error1Schema,
  type ApiV1MiscGoogleBusinessLocationSearchKeywords502Error1,
} from "../models/api-v1-misc-google-business-location-search-keywords502-error1.js";
import {
  apiV1MiscGoogleBusinessLocationSearchKeywords503Error1Schema,
  type ApiV1MiscGoogleBusinessLocationSearchKeywords503Error1,
} from "../models/api-v1-misc-google-business-location-search-keywords503-error1.js";
import {
  apiV1MiscGoogleBusinessLocationSearchKeywords504Error1Schema,
  type ApiV1MiscGoogleBusinessLocationSearchKeywords504Error1,
} from "../models/api-v1-misc-google-business-location-search-keywords504-error1.js";
import {
  apiV1MiscGoogleBusinessLocationServiceListRequestInternalSchema,
  type ApiV1MiscGoogleBusinessLocationServiceListRequest,
} from "../models/api-v1-misc-google-business-location-service-list-request.js";
import {
  apiV1MiscGoogleBusinessLocationServiceListResponseSchema,
  type ApiV1MiscGoogleBusinessLocationServiceListResponse,
} from "../models/api-v1-misc-google-business-location-service-list-response.js";
import {
  apiV1MiscGoogleBusinessLocationServiceList400Error1Schema,
  type ApiV1MiscGoogleBusinessLocationServiceList400Error1,
} from "../models/api-v1-misc-google-business-location-service-list400-error1.js";
import {
  apiV1MiscGoogleBusinessLocationServiceList401Error1Schema,
  type ApiV1MiscGoogleBusinessLocationServiceList401Error1,
} from "../models/api-v1-misc-google-business-location-service-list401-error1.js";
import {
  apiV1MiscGoogleBusinessLocationServiceList403Error1Schema,
  type ApiV1MiscGoogleBusinessLocationServiceList403Error1,
} from "../models/api-v1-misc-google-business-location-service-list403-error1.js";
import {
  apiV1MiscGoogleBusinessLocationServiceList404Error1Schema,
  type ApiV1MiscGoogleBusinessLocationServiceList404Error1,
} from "../models/api-v1-misc-google-business-location-service-list404-error1.js";
import {
  apiV1MiscGoogleBusinessLocationServiceList429Error1Schema,
  type ApiV1MiscGoogleBusinessLocationServiceList429Error1,
} from "../models/api-v1-misc-google-business-location-service-list429-error1.js";
import {
  apiV1MiscGoogleBusinessLocationServiceList500Error1Schema,
  type ApiV1MiscGoogleBusinessLocationServiceList500Error1,
} from "../models/api-v1-misc-google-business-location-service-list500-error1.js";
import {
  apiV1MiscGoogleBusinessLocationServiceList502Error1Schema,
  type ApiV1MiscGoogleBusinessLocationServiceList502Error1,
} from "../models/api-v1-misc-google-business-location-service-list502-error1.js";
import {
  apiV1MiscGoogleBusinessLocationServiceList503Error1Schema,
  type ApiV1MiscGoogleBusinessLocationServiceList503Error1,
} from "../models/api-v1-misc-google-business-location-service-list503-error1.js";
import {
  apiV1MiscGoogleBusinessLocationServiceList504Error1Schema,
  type ApiV1MiscGoogleBusinessLocationServiceList504Error1,
} from "../models/api-v1-misc-google-business-location-service-list504-error1.js";
import {
  apiV1MiscGoogleBusinessLocation400Error1Schema,
  type ApiV1MiscGoogleBusinessLocation400Error1,
} from "../models/api-v1-misc-google-business-location400-error1.js";
import {
  apiV1MiscGoogleBusinessLocation401Error1Schema,
  type ApiV1MiscGoogleBusinessLocation401Error1,
} from "../models/api-v1-misc-google-business-location401-error1.js";
import {
  apiV1MiscGoogleBusinessLocation403Error1Schema,
  type ApiV1MiscGoogleBusinessLocation403Error1,
} from "../models/api-v1-misc-google-business-location403-error1.js";
import {
  apiV1MiscGoogleBusinessLocation404Error1Schema,
  type ApiV1MiscGoogleBusinessLocation404Error1,
} from "../models/api-v1-misc-google-business-location404-error1.js";
import {
  apiV1MiscGoogleBusinessLocation429Error1Schema,
  type ApiV1MiscGoogleBusinessLocation429Error1,
} from "../models/api-v1-misc-google-business-location429-error1.js";
import {
  apiV1MiscGoogleBusinessLocation500Error1Schema,
  type ApiV1MiscGoogleBusinessLocation500Error1,
} from "../models/api-v1-misc-google-business-location500-error1.js";
import {
  apiV1MiscGoogleBusinessLocation502Error1Schema,
  type ApiV1MiscGoogleBusinessLocation502Error1,
} from "../models/api-v1-misc-google-business-location502-error1.js";
import {
  apiV1MiscGoogleBusinessLocation503Error1Schema,
  type ApiV1MiscGoogleBusinessLocation503Error1,
} from "../models/api-v1-misc-google-business-location503-error1.js";
import {
  apiV1MiscGoogleBusinessLocation504Error1Schema,
  type ApiV1MiscGoogleBusinessLocation504Error1,
} from "../models/api-v1-misc-google-business-location504-error1.js";
import {
  apiV1MiscGoogleBusinessMediaRequestInternalSchema,
  type ApiV1MiscGoogleBusinessMediaRequest,
} from "../models/api-v1-misc-google-business-media-request.js";
import {
  apiV1MiscGoogleBusinessMediaRequest1Schema,
  type ApiV1MiscGoogleBusinessMediaRequest1,
} from "../models/api-v1-misc-google-business-media-request1.js";
import {
  apiV1MiscGoogleBusinessMediaResponseInternalSchema,
  type ApiV1MiscGoogleBusinessMediaResponse,
} from "../models/api-v1-misc-google-business-media-response.js";
import {
  apiV1MiscGoogleBusinessMediaResponse1InternalSchema,
  type ApiV1MiscGoogleBusinessMediaResponse1,
} from "../models/api-v1-misc-google-business-media-response1.js";
import {
  apiV1MiscGoogleBusinessMediaResponse2Schema,
  type ApiV1MiscGoogleBusinessMediaResponse2,
} from "../models/api-v1-misc-google-business-media-response2.js";
import {
  apiV1MiscGoogleBusinessMedia400Error1Schema,
  type ApiV1MiscGoogleBusinessMedia400Error1,
} from "../models/api-v1-misc-google-business-media400-error1.js";
import {
  apiV1MiscGoogleBusinessMedia401Error1Schema,
  type ApiV1MiscGoogleBusinessMedia401Error1,
} from "../models/api-v1-misc-google-business-media401-error1.js";
import {
  apiV1MiscGoogleBusinessMedia403Error1Schema,
  type ApiV1MiscGoogleBusinessMedia403Error1,
} from "../models/api-v1-misc-google-business-media403-error1.js";
import {
  apiV1MiscGoogleBusinessMedia404Error1Schema,
  type ApiV1MiscGoogleBusinessMedia404Error1,
} from "../models/api-v1-misc-google-business-media404-error1.js";
import {
  apiV1MiscGoogleBusinessMedia429Error1Schema,
  type ApiV1MiscGoogleBusinessMedia429Error1,
} from "../models/api-v1-misc-google-business-media429-error1.js";
import {
  apiV1MiscGoogleBusinessMedia500Error1Schema,
  type ApiV1MiscGoogleBusinessMedia500Error1,
} from "../models/api-v1-misc-google-business-media500-error1.js";
import {
  apiV1MiscGoogleBusinessMedia502Error1Schema,
  type ApiV1MiscGoogleBusinessMedia502Error1,
} from "../models/api-v1-misc-google-business-media502-error1.js";
import {
  apiV1MiscGoogleBusinessMedia503Error1Schema,
  type ApiV1MiscGoogleBusinessMedia503Error1,
} from "../models/api-v1-misc-google-business-media503-error1.js";
import {
  apiV1MiscGoogleBusinessMedia504Error1Schema,
  type ApiV1MiscGoogleBusinessMedia504Error1,
} from "../models/api-v1-misc-google-business-media504-error1.js";
import {
  apiV1MiscGoogleBusinessPostRequestSchema,
  type ApiV1MiscGoogleBusinessPostRequest,
} from "../models/api-v1-misc-google-business-post-request.js";
import {
  apiV1MiscGoogleBusinessPostResponseSchema,
  type ApiV1MiscGoogleBusinessPostResponse,
} from "../models/api-v1-misc-google-business-post-response.js";
import {
  apiV1MiscGoogleBusinessPost400Error1Schema,
  type ApiV1MiscGoogleBusinessPost400Error1,
} from "../models/api-v1-misc-google-business-post400-error1.js";
import {
  apiV1MiscGoogleBusinessPost401Error1Schema,
  type ApiV1MiscGoogleBusinessPost401Error1,
} from "../models/api-v1-misc-google-business-post401-error1.js";
import {
  apiV1MiscGoogleBusinessPost403Error1Schema,
  type ApiV1MiscGoogleBusinessPost403Error1,
} from "../models/api-v1-misc-google-business-post403-error1.js";
import {
  apiV1MiscGoogleBusinessPost404Error1Schema,
  type ApiV1MiscGoogleBusinessPost404Error1,
} from "../models/api-v1-misc-google-business-post404-error1.js";
import {
  apiV1MiscGoogleBusinessPost429Error1Schema,
  type ApiV1MiscGoogleBusinessPost429Error1,
} from "../models/api-v1-misc-google-business-post429-error1.js";
import {
  apiV1MiscGoogleBusinessPost500Error1Schema,
  type ApiV1MiscGoogleBusinessPost500Error1,
} from "../models/api-v1-misc-google-business-post500-error1.js";
import {
  apiV1MiscGoogleBusinessPost502Error1Schema,
  type ApiV1MiscGoogleBusinessPost502Error1,
} from "../models/api-v1-misc-google-business-post502-error1.js";
import {
  apiV1MiscGoogleBusinessPost503Error1Schema,
  type ApiV1MiscGoogleBusinessPost503Error1,
} from "../models/api-v1-misc-google-business-post503-error1.js";
import {
  apiV1MiscGoogleBusinessPost504Error1Schema,
  type ApiV1MiscGoogleBusinessPost504Error1,
} from "../models/api-v1-misc-google-business-post504-error1.js";
import {
  apiV1MiscGoogleBusinessReviewsImportRequestInternalSchema,
  type ApiV1MiscGoogleBusinessReviewsImportRequest,
} from "../models/api-v1-misc-google-business-reviews-import-request.js";
import {
  apiV1MiscGoogleBusinessReviewsImportResponseSchema,
  type ApiV1MiscGoogleBusinessReviewsImportResponse,
} from "../models/api-v1-misc-google-business-reviews-import-response.js";
import {
  apiV1MiscGoogleBusinessReviewsImportResponse1Schema,
  type ApiV1MiscGoogleBusinessReviewsImportResponse1,
} from "../models/api-v1-misc-google-business-reviews-import-response1.js";
import {
  apiV1MiscGoogleBusinessReviewsImport400Error1Schema,
  type ApiV1MiscGoogleBusinessReviewsImport400Error1,
} from "../models/api-v1-misc-google-business-reviews-import400-error1.js";
import {
  apiV1MiscGoogleBusinessReviewsImport401Error1Schema,
  type ApiV1MiscGoogleBusinessReviewsImport401Error1,
} from "../models/api-v1-misc-google-business-reviews-import401-error1.js";
import {
  apiV1MiscGoogleBusinessReviewsImport403Error1Schema,
  type ApiV1MiscGoogleBusinessReviewsImport403Error1,
} from "../models/api-v1-misc-google-business-reviews-import403-error1.js";
import {
  apiV1MiscGoogleBusinessReviewsImport404Error1Schema,
  type ApiV1MiscGoogleBusinessReviewsImport404Error1,
} from "../models/api-v1-misc-google-business-reviews-import404-error1.js";
import {
  apiV1MiscGoogleBusinessReviewsImport409Error1Schema,
  type ApiV1MiscGoogleBusinessReviewsImport409Error1,
} from "../models/api-v1-misc-google-business-reviews-import409-error1.js";
import {
  apiV1MiscGoogleBusinessReviewsImport429Error1Schema,
  type ApiV1MiscGoogleBusinessReviewsImport429Error1,
} from "../models/api-v1-misc-google-business-reviews-import429-error1.js";
import {
  apiV1MiscGoogleBusinessReviewsImport500Error1Schema,
  type ApiV1MiscGoogleBusinessReviewsImport500Error1,
} from "../models/api-v1-misc-google-business-reviews-import500-error1.js";
import {
  apiV1MiscGoogleBusinessReviewsImport502Error1Schema,
  type ApiV1MiscGoogleBusinessReviewsImport502Error1,
} from "../models/api-v1-misc-google-business-reviews-import502-error1.js";
import {
  apiV1MiscGoogleBusinessReviewsImport503Error1Schema,
  type ApiV1MiscGoogleBusinessReviewsImport503Error1,
} from "../models/api-v1-misc-google-business-reviews-import503-error1.js";
import {
  apiV1MiscGoogleBusinessReviewsImport504Error1Schema,
  type ApiV1MiscGoogleBusinessReviewsImport504Error1,
} from "../models/api-v1-misc-google-business-reviews-import504-error1.js";
import {
  apiV1MiscGoogleBusinessReviewsReplyRequestInternalSchema,
  type ApiV1MiscGoogleBusinessReviewsReplyRequest,
} from "../models/api-v1-misc-google-business-reviews-reply-request.js";
import {
  apiV1MiscGoogleBusinessReviewsReplyRequest1Schema,
  type ApiV1MiscGoogleBusinessReviewsReplyRequest1,
} from "../models/api-v1-misc-google-business-reviews-reply-request1.js";
import {
  apiV1MiscGoogleBusinessReviewsReplyResponseSchema,
  type ApiV1MiscGoogleBusinessReviewsReplyResponse,
} from "../models/api-v1-misc-google-business-reviews-reply-response.js";
import {
  apiV1MiscGoogleBusinessReviewsReply400Error1Schema,
  type ApiV1MiscGoogleBusinessReviewsReply400Error1,
} from "../models/api-v1-misc-google-business-reviews-reply400-error1.js";
import {
  apiV1MiscGoogleBusinessReviewsReply401Error1Schema,
  type ApiV1MiscGoogleBusinessReviewsReply401Error1,
} from "../models/api-v1-misc-google-business-reviews-reply401-error1.js";
import {
  apiV1MiscGoogleBusinessReviewsReply403Error1Schema,
  type ApiV1MiscGoogleBusinessReviewsReply403Error1,
} from "../models/api-v1-misc-google-business-reviews-reply403-error1.js";
import {
  apiV1MiscGoogleBusinessReviewsReply404Error1Schema,
  type ApiV1MiscGoogleBusinessReviewsReply404Error1,
} from "../models/api-v1-misc-google-business-reviews-reply404-error1.js";
import {
  apiV1MiscGoogleBusinessReviewsReply429Error1Schema,
  type ApiV1MiscGoogleBusinessReviewsReply429Error1,
} from "../models/api-v1-misc-google-business-reviews-reply429-error1.js";
import {
  apiV1MiscGoogleBusinessReviewsReply500Error1Schema,
  type ApiV1MiscGoogleBusinessReviewsReply500Error1,
} from "../models/api-v1-misc-google-business-reviews-reply500-error1.js";
import {
  apiV1MiscGoogleBusinessReviewsReply502Error1Schema,
  type ApiV1MiscGoogleBusinessReviewsReply502Error1,
} from "../models/api-v1-misc-google-business-reviews-reply502-error1.js";
import {
  apiV1MiscGoogleBusinessReviewsReply503Error1Schema,
  type ApiV1MiscGoogleBusinessReviewsReply503Error1,
} from "../models/api-v1-misc-google-business-reviews-reply503-error1.js";
import {
  apiV1MiscGoogleBusinessReviewsReply504Error1Schema,
  type ApiV1MiscGoogleBusinessReviewsReply504Error1,
} from "../models/api-v1-misc-google-business-reviews-reply504-error1.js";
import {
  apiV1MiscGoogleBusinessReviewsResponseSchema,
  type ApiV1MiscGoogleBusinessReviewsResponse,
} from "../models/api-v1-misc-google-business-reviews-response.js";
import {
  apiV1MiscGoogleBusinessReviewsResponse1Schema,
  type ApiV1MiscGoogleBusinessReviewsResponse1,
} from "../models/api-v1-misc-google-business-reviews-response1.js";
import {
  apiV1MiscGoogleBusinessReviews400Error1Schema,
  type ApiV1MiscGoogleBusinessReviews400Error1,
} from "../models/api-v1-misc-google-business-reviews400-error1.js";
import {
  apiV1MiscGoogleBusinessReviews401Error1Schema,
  type ApiV1MiscGoogleBusinessReviews401Error1,
} from "../models/api-v1-misc-google-business-reviews401-error1.js";
import {
  apiV1MiscGoogleBusinessReviews403Error1Schema,
  type ApiV1MiscGoogleBusinessReviews403Error1,
} from "../models/api-v1-misc-google-business-reviews403-error1.js";
import {
  apiV1MiscGoogleBusinessReviews404Error1Schema,
  type ApiV1MiscGoogleBusinessReviews404Error1,
} from "../models/api-v1-misc-google-business-reviews404-error1.js";
import {
  apiV1MiscGoogleBusinessReviews429Error1Schema,
  type ApiV1MiscGoogleBusinessReviews429Error1,
} from "../models/api-v1-misc-google-business-reviews429-error1.js";
import {
  apiV1MiscGoogleBusinessReviews500Error1Schema,
  type ApiV1MiscGoogleBusinessReviews500Error1,
} from "../models/api-v1-misc-google-business-reviews500-error1.js";
import {
  apiV1MiscGoogleBusinessReviews502Error1Schema,
  type ApiV1MiscGoogleBusinessReviews502Error1,
} from "../models/api-v1-misc-google-business-reviews502-error1.js";
import {
  apiV1MiscGoogleBusinessReviews503Error1Schema,
  type ApiV1MiscGoogleBusinessReviews503Error1,
} from "../models/api-v1-misc-google-business-reviews503-error1.js";
import {
  apiV1MiscGoogleBusinessReviews504Error1Schema,
  type ApiV1MiscGoogleBusinessReviews504Error1,
} from "../models/api-v1-misc-google-business-reviews504-error1.js";
import {
  apiV1MiscInstagramAudioResponseSchema,
  type ApiV1MiscInstagramAudioResponse,
} from "../models/api-v1-misc-instagram-audio-response.js";
import {
  apiV1MiscInstagramAudio400Error1Schema,
  type ApiV1MiscInstagramAudio400Error1,
} from "../models/api-v1-misc-instagram-audio400-error1.js";
import {
  apiV1MiscInstagramAudio401Error1Schema,
  type ApiV1MiscInstagramAudio401Error1,
} from "../models/api-v1-misc-instagram-audio401-error1.js";
import {
  apiV1MiscInstagramAudio403Error1Schema,
  type ApiV1MiscInstagramAudio403Error1,
} from "../models/api-v1-misc-instagram-audio403-error1.js";
import {
  apiV1MiscInstagramAudio404Error1Schema,
  type ApiV1MiscInstagramAudio404Error1,
} from "../models/api-v1-misc-instagram-audio404-error1.js";
import {
  apiV1MiscInstagramAudio429Error1Schema,
  type ApiV1MiscInstagramAudio429Error1,
} from "../models/api-v1-misc-instagram-audio429-error1.js";
import {
  apiV1MiscInstagramAudio500Error1Schema,
  type ApiV1MiscInstagramAudio500Error1,
} from "../models/api-v1-misc-instagram-audio500-error1.js";
import {
  apiV1MiscInstagramAudio502Error1Schema,
  type ApiV1MiscInstagramAudio502Error1,
} from "../models/api-v1-misc-instagram-audio502-error1.js";
import {
  apiV1MiscInstagramAudio503Error1Schema,
  type ApiV1MiscInstagramAudio503Error1,
} from "../models/api-v1-misc-instagram-audio503-error1.js";
import {
  apiV1MiscInstagramAudio504Error1Schema,
  type ApiV1MiscInstagramAudio504Error1,
} from "../models/api-v1-misc-instagram-audio504-error1.js";
import {
  apiV1MiscInstagramCommentRequestSchema,
  type ApiV1MiscInstagramCommentRequest,
} from "../models/api-v1-misc-instagram-comment-request.js";
import {
  apiV1MiscInstagramCommentResponseSchema,
  type ApiV1MiscInstagramCommentResponse,
} from "../models/api-v1-misc-instagram-comment-response.js";
import {
  apiV1MiscInstagramComment400Error1Schema,
  type ApiV1MiscInstagramComment400Error1,
} from "../models/api-v1-misc-instagram-comment400-error1.js";
import {
  apiV1MiscInstagramComment401Error1Schema,
  type ApiV1MiscInstagramComment401Error1,
} from "../models/api-v1-misc-instagram-comment401-error1.js";
import {
  apiV1MiscInstagramComment403Error1Schema,
  type ApiV1MiscInstagramComment403Error1,
} from "../models/api-v1-misc-instagram-comment403-error1.js";
import {
  apiV1MiscInstagramComment404Error1Schema,
  type ApiV1MiscInstagramComment404Error1,
} from "../models/api-v1-misc-instagram-comment404-error1.js";
import {
  apiV1MiscInstagramComment429Error1Schema,
  type ApiV1MiscInstagramComment429Error1,
} from "../models/api-v1-misc-instagram-comment429-error1.js";
import {
  apiV1MiscInstagramComment500Error1Schema,
  type ApiV1MiscInstagramComment500Error1,
} from "../models/api-v1-misc-instagram-comment500-error1.js";
import {
  apiV1MiscInstagramComment502Error1Schema,
  type ApiV1MiscInstagramComment502Error1,
} from "../models/api-v1-misc-instagram-comment502-error1.js";
import {
  apiV1MiscInstagramComment503Error1Schema,
  type ApiV1MiscInstagramComment503Error1,
} from "../models/api-v1-misc-instagram-comment503-error1.js";
import {
  apiV1MiscInstagramComment504Error1Schema,
  type ApiV1MiscInstagramComment504Error1,
} from "../models/api-v1-misc-instagram-comment504-error1.js";
import {
  apiV1MiscInstagramLocationsResponseSchema,
  type ApiV1MiscInstagramLocationsResponse,
} from "../models/api-v1-misc-instagram-locations-response.js";
import {
  apiV1MiscInstagramLocations400Error1Schema,
  type ApiV1MiscInstagramLocations400Error1,
} from "../models/api-v1-misc-instagram-locations400-error1.js";
import {
  apiV1MiscInstagramLocations401Error1Schema,
  type ApiV1MiscInstagramLocations401Error1,
} from "../models/api-v1-misc-instagram-locations401-error1.js";
import {
  apiV1MiscInstagramLocations403Error1Schema,
  type ApiV1MiscInstagramLocations403Error1,
} from "../models/api-v1-misc-instagram-locations403-error1.js";
import {
  apiV1MiscInstagramLocations404Error1Schema,
  type ApiV1MiscInstagramLocations404Error1,
} from "../models/api-v1-misc-instagram-locations404-error1.js";
import {
  apiV1MiscInstagramLocations429Error1Schema,
  type ApiV1MiscInstagramLocations429Error1,
} from "../models/api-v1-misc-instagram-locations429-error1.js";
import {
  apiV1MiscInstagramLocations500Error1Schema,
  type ApiV1MiscInstagramLocations500Error1,
} from "../models/api-v1-misc-instagram-locations500-error1.js";
import {
  apiV1MiscInstagramLocations502Error1Schema,
  type ApiV1MiscInstagramLocations502Error1,
} from "../models/api-v1-misc-instagram-locations502-error1.js";
import {
  apiV1MiscInstagramLocations503Error1Schema,
  type ApiV1MiscInstagramLocations503Error1,
} from "../models/api-v1-misc-instagram-locations503-error1.js";
import {
  apiV1MiscInstagramLocations504Error1Schema,
  type ApiV1MiscInstagramLocations504Error1,
} from "../models/api-v1-misc-instagram-locations504-error1.js";
import {
  apiV1MiscInstagramTagsResponseInternalSchema,
  type ApiV1MiscInstagramTagsResponse,
} from "../models/api-v1-misc-instagram-tags-response.js";
import {
  apiV1MiscInstagramTags400Error1Schema,
  type ApiV1MiscInstagramTags400Error1,
} from "../models/api-v1-misc-instagram-tags400-error1.js";
import {
  apiV1MiscInstagramTags401Error1Schema,
  type ApiV1MiscInstagramTags401Error1,
} from "../models/api-v1-misc-instagram-tags401-error1.js";
import {
  apiV1MiscInstagramTags403Error1Schema,
  type ApiV1MiscInstagramTags403Error1,
} from "../models/api-v1-misc-instagram-tags403-error1.js";
import {
  apiV1MiscInstagramTags404Error1Schema,
  type ApiV1MiscInstagramTags404Error1,
} from "../models/api-v1-misc-instagram-tags404-error1.js";
import {
  apiV1MiscInstagramTags429Error1Schema,
  type ApiV1MiscInstagramTags429Error1,
} from "../models/api-v1-misc-instagram-tags429-error1.js";
import {
  apiV1MiscInstagramTags500Error1Schema,
  type ApiV1MiscInstagramTags500Error1,
} from "../models/api-v1-misc-instagram-tags500-error1.js";
import {
  apiV1MiscInstagramTags502Error1Schema,
  type ApiV1MiscInstagramTags502Error1,
} from "../models/api-v1-misc-instagram-tags502-error1.js";
import {
  apiV1MiscInstagramTags503Error1Schema,
  type ApiV1MiscInstagramTags503Error1,
} from "../models/api-v1-misc-instagram-tags503-error1.js";
import {
  apiV1MiscInstagramTags504Error1Schema,
  type ApiV1MiscInstagramTags504Error1,
} from "../models/api-v1-misc-instagram-tags504-error1.js";
import {
  apiV1MiscLinkedinCommentRequestInternalSchema,
  type ApiV1MiscLinkedinCommentRequest,
} from "../models/api-v1-misc-linkedin-comment-request.js";
import {
  apiV1MiscLinkedinCommentRequest1Schema,
  type ApiV1MiscLinkedinCommentRequest1,
} from "../models/api-v1-misc-linkedin-comment-request1.js";
import {
  apiV1MiscLinkedinCommentResponseSchema,
  type ApiV1MiscLinkedinCommentResponse,
} from "../models/api-v1-misc-linkedin-comment-response.js";
import {
  apiV1MiscLinkedinCommentResponse1Schema,
  type ApiV1MiscLinkedinCommentResponse1,
} from "../models/api-v1-misc-linkedin-comment-response1.js";
import {
  apiV1MiscLinkedinComment400Error1Schema,
  type ApiV1MiscLinkedinComment400Error1,
} from "../models/api-v1-misc-linkedin-comment400-error1.js";
import {
  apiV1MiscLinkedinComment401Error1Schema,
  type ApiV1MiscLinkedinComment401Error1,
} from "../models/api-v1-misc-linkedin-comment401-error1.js";
import {
  apiV1MiscLinkedinComment403Error1Schema,
  type ApiV1MiscLinkedinComment403Error1,
} from "../models/api-v1-misc-linkedin-comment403-error1.js";
import {
  apiV1MiscLinkedinComment404Error1Schema,
  type ApiV1MiscLinkedinComment404Error1,
} from "../models/api-v1-misc-linkedin-comment404-error1.js";
import {
  apiV1MiscLinkedinComment429Error1Schema,
  type ApiV1MiscLinkedinComment429Error1,
} from "../models/api-v1-misc-linkedin-comment429-error1.js";
import {
  apiV1MiscLinkedinComment500Error1Schema,
  type ApiV1MiscLinkedinComment500Error1,
} from "../models/api-v1-misc-linkedin-comment500-error1.js";
import {
  apiV1MiscLinkedinComment502Error1Schema,
  type ApiV1MiscLinkedinComment502Error1,
} from "../models/api-v1-misc-linkedin-comment502-error1.js";
import {
  apiV1MiscLinkedinComment503Error1Schema,
  type ApiV1MiscLinkedinComment503Error1,
} from "../models/api-v1-misc-linkedin-comment503-error1.js";
import {
  apiV1MiscLinkedinComment504Error1Schema,
  type ApiV1MiscLinkedinComment504Error1,
} from "../models/api-v1-misc-linkedin-comment504-error1.js";
import {
  apiV1MiscLinkedinMentionsBuilderRequestSchema,
  type ApiV1MiscLinkedinMentionsBuilderRequest,
} from "../models/api-v1-misc-linkedin-mentions-builder-request.js";
import {
  apiV1MiscLinkedinMentionsBuilderResponseSchema,
  type ApiV1MiscLinkedinMentionsBuilderResponse,
} from "../models/api-v1-misc-linkedin-mentions-builder-response.js";
import {
  apiV1MiscLinkedinMentionsBuilder400Error1Schema,
  type ApiV1MiscLinkedinMentionsBuilder400Error1,
} from "../models/api-v1-misc-linkedin-mentions-builder400-error1.js";
import {
  apiV1MiscLinkedinMentionsBuilder401Error1Schema,
  type ApiV1MiscLinkedinMentionsBuilder401Error1,
} from "../models/api-v1-misc-linkedin-mentions-builder401-error1.js";
import {
  apiV1MiscLinkedinMentionsBuilder403Error1Schema,
  type ApiV1MiscLinkedinMentionsBuilder403Error1,
} from "../models/api-v1-misc-linkedin-mentions-builder403-error1.js";
import {
  apiV1MiscLinkedinMentionsBuilder404Error1Schema,
  type ApiV1MiscLinkedinMentionsBuilder404Error1,
} from "../models/api-v1-misc-linkedin-mentions-builder404-error1.js";
import {
  apiV1MiscLinkedinMentionsBuilder429Error1Schema,
  type ApiV1MiscLinkedinMentionsBuilder429Error1,
} from "../models/api-v1-misc-linkedin-mentions-builder429-error1.js";
import {
  apiV1MiscLinkedinMentionsBuilder500Error1Schema,
  type ApiV1MiscLinkedinMentionsBuilder500Error1,
} from "../models/api-v1-misc-linkedin-mentions-builder500-error1.js";
import {
  apiV1MiscLinkedinMentionsBuilder502Error1Schema,
  type ApiV1MiscLinkedinMentionsBuilder502Error1,
} from "../models/api-v1-misc-linkedin-mentions-builder502-error1.js";
import {
  apiV1MiscLinkedinMentionsBuilder503Error1Schema,
  type ApiV1MiscLinkedinMentionsBuilder503Error1,
} from "../models/api-v1-misc-linkedin-mentions-builder503-error1.js";
import {
  apiV1MiscLinkedinMentionsBuilder504Error1Schema,
  type ApiV1MiscLinkedinMentionsBuilder504Error1,
} from "../models/api-v1-misc-linkedin-mentions-builder504-error1.js";
import {
  apiV1MiscLinkedinMentionsTagsResponseInternalSchema,
  type ApiV1MiscLinkedinMentionsTagsResponse,
} from "../models/api-v1-misc-linkedin-mentions-tags-response.js";
import {
  apiV1MiscLinkedinMentionsTags400Error1Schema,
  type ApiV1MiscLinkedinMentionsTags400Error1,
} from "../models/api-v1-misc-linkedin-mentions-tags400-error1.js";
import {
  apiV1MiscLinkedinMentionsTags401Error1Schema,
  type ApiV1MiscLinkedinMentionsTags401Error1,
} from "../models/api-v1-misc-linkedin-mentions-tags401-error1.js";
import {
  apiV1MiscLinkedinMentionsTags403Error1Schema,
  type ApiV1MiscLinkedinMentionsTags403Error1,
} from "../models/api-v1-misc-linkedin-mentions-tags403-error1.js";
import {
  apiV1MiscLinkedinMentionsTags404Error1Schema,
  type ApiV1MiscLinkedinMentionsTags404Error1,
} from "../models/api-v1-misc-linkedin-mentions-tags404-error1.js";
import {
  apiV1MiscLinkedinMentionsTags429Error1Schema,
  type ApiV1MiscLinkedinMentionsTags429Error1,
} from "../models/api-v1-misc-linkedin-mentions-tags429-error1.js";
import {
  apiV1MiscLinkedinMentionsTags500Error1Schema,
  type ApiV1MiscLinkedinMentionsTags500Error1,
} from "../models/api-v1-misc-linkedin-mentions-tags500-error1.js";
import {
  apiV1MiscLinkedinMentionsTags502Error1Schema,
  type ApiV1MiscLinkedinMentionsTags502Error1,
} from "../models/api-v1-misc-linkedin-mentions-tags502-error1.js";
import {
  apiV1MiscLinkedinMentionsTags503Error1Schema,
  type ApiV1MiscLinkedinMentionsTags503Error1,
} from "../models/api-v1-misc-linkedin-mentions-tags503-error1.js";
import {
  apiV1MiscLinkedinMentionsTags504Error1Schema,
  type ApiV1MiscLinkedinMentionsTags504Error1,
} from "../models/api-v1-misc-linkedin-mentions-tags504-error1.js";
import {
  apiV1MiscLinkedinPostRequestSchema,
  type ApiV1MiscLinkedinPostRequest,
} from "../models/api-v1-misc-linkedin-post-request.js";
import {
  apiV1MiscLinkedinPostRequest1Schema,
  type ApiV1MiscLinkedinPostRequest1,
} from "../models/api-v1-misc-linkedin-post-request1.js";
import {
  apiV1MiscLinkedinPostReshareRequestInternalSchema,
  type ApiV1MiscLinkedinPostReshareRequest,
} from "../models/api-v1-misc-linkedin-post-reshare-request.js";
import {
  apiV1MiscLinkedinPostReshareResponseSchema,
  type ApiV1MiscLinkedinPostReshareResponse,
} from "../models/api-v1-misc-linkedin-post-reshare-response.js";
import {
  apiV1MiscLinkedinPostReshare400Error1Schema,
  type ApiV1MiscLinkedinPostReshare400Error1,
} from "../models/api-v1-misc-linkedin-post-reshare400-error1.js";
import {
  apiV1MiscLinkedinPostReshare401Error1Schema,
  type ApiV1MiscLinkedinPostReshare401Error1,
} from "../models/api-v1-misc-linkedin-post-reshare401-error1.js";
import {
  apiV1MiscLinkedinPostReshare403Error1Schema,
  type ApiV1MiscLinkedinPostReshare403Error1,
} from "../models/api-v1-misc-linkedin-post-reshare403-error1.js";
import {
  apiV1MiscLinkedinPostReshare404Error1Schema,
  type ApiV1MiscLinkedinPostReshare404Error1,
} from "../models/api-v1-misc-linkedin-post-reshare404-error1.js";
import {
  apiV1MiscLinkedinPostReshare422Error1Schema,
  type ApiV1MiscLinkedinPostReshare422Error1,
} from "../models/api-v1-misc-linkedin-post-reshare422-error1.js";
import {
  apiV1MiscLinkedinPostReshare429Error1Schema,
  type ApiV1MiscLinkedinPostReshare429Error1,
} from "../models/api-v1-misc-linkedin-post-reshare429-error1.js";
import {
  apiV1MiscLinkedinPostReshare500Error1Schema,
  type ApiV1MiscLinkedinPostReshare500Error1,
} from "../models/api-v1-misc-linkedin-post-reshare500-error1.js";
import {
  apiV1MiscLinkedinPostReshare502Error1Schema,
  type ApiV1MiscLinkedinPostReshare502Error1,
} from "../models/api-v1-misc-linkedin-post-reshare502-error1.js";
import {
  apiV1MiscLinkedinPostReshare503Error1Schema,
  type ApiV1MiscLinkedinPostReshare503Error1,
} from "../models/api-v1-misc-linkedin-post-reshare503-error1.js";
import {
  apiV1MiscLinkedinPostReshare504Error1Schema,
  type ApiV1MiscLinkedinPostReshare504Error1,
} from "../models/api-v1-misc-linkedin-post-reshare504-error1.js";
import {
  apiV1MiscLinkedinPostResponseSchema,
  type ApiV1MiscLinkedinPostResponse,
} from "../models/api-v1-misc-linkedin-post-response.js";
import {
  apiV1MiscLinkedinPostResponse1Schema,
  type ApiV1MiscLinkedinPostResponse1,
} from "../models/api-v1-misc-linkedin-post-response1.js";
import {
  apiV1MiscLinkedinPost400Error1Schema,
  type ApiV1MiscLinkedinPost400Error1,
} from "../models/api-v1-misc-linkedin-post400-error1.js";
import {
  apiV1MiscLinkedinPost401Error1Schema,
  type ApiV1MiscLinkedinPost401Error1,
} from "../models/api-v1-misc-linkedin-post401-error1.js";
import {
  apiV1MiscLinkedinPost403Error1Schema,
  type ApiV1MiscLinkedinPost403Error1,
} from "../models/api-v1-misc-linkedin-post403-error1.js";
import {
  apiV1MiscLinkedinPost404Error1Schema,
  type ApiV1MiscLinkedinPost404Error1,
} from "../models/api-v1-misc-linkedin-post404-error1.js";
import {
  apiV1MiscLinkedinPost429Error1Schema,
  type ApiV1MiscLinkedinPost429Error1,
} from "../models/api-v1-misc-linkedin-post429-error1.js";
import {
  apiV1MiscLinkedinPost500Error1Schema,
  type ApiV1MiscLinkedinPost500Error1,
} from "../models/api-v1-misc-linkedin-post500-error1.js";
import {
  apiV1MiscLinkedinPost502Error1Schema,
  type ApiV1MiscLinkedinPost502Error1,
} from "../models/api-v1-misc-linkedin-post502-error1.js";
import {
  apiV1MiscLinkedinPost503Error1Schema,
  type ApiV1MiscLinkedinPost503Error1,
} from "../models/api-v1-misc-linkedin-post503-error1.js";
import {
  apiV1MiscLinkedinPost504Error1Schema,
  type ApiV1MiscLinkedinPost504Error1,
} from "../models/api-v1-misc-linkedin-post504-error1.js";
import {
  apiV1MiscMastodonCommentRequestInternalSchema,
  type ApiV1MiscMastodonCommentRequest,
} from "../models/api-v1-misc-mastodon-comment-request.js";
import {
  apiV1MiscMastodonCommentRequest1Schema,
  type ApiV1MiscMastodonCommentRequest1,
} from "../models/api-v1-misc-mastodon-comment-request1.js";
import {
  apiV1MiscMastodonCommentResponseSchema,
  type ApiV1MiscMastodonCommentResponse,
} from "../models/api-v1-misc-mastodon-comment-response.js";
import {
  apiV1MiscMastodonCommentResponse1Schema,
  type ApiV1MiscMastodonCommentResponse1,
} from "../models/api-v1-misc-mastodon-comment-response1.js";
import {
  apiV1MiscMastodonComment400Error1Schema,
  type ApiV1MiscMastodonComment400Error1,
} from "../models/api-v1-misc-mastodon-comment400-error1.js";
import {
  apiV1MiscMastodonComment401Error1Schema,
  type ApiV1MiscMastodonComment401Error1,
} from "../models/api-v1-misc-mastodon-comment401-error1.js";
import {
  apiV1MiscMastodonComment403Error1Schema,
  type ApiV1MiscMastodonComment403Error1,
} from "../models/api-v1-misc-mastodon-comment403-error1.js";
import {
  apiV1MiscMastodonComment404Error1Schema,
  type ApiV1MiscMastodonComment404Error1,
} from "../models/api-v1-misc-mastodon-comment404-error1.js";
import {
  apiV1MiscMastodonComment429Error1Schema,
  type ApiV1MiscMastodonComment429Error1,
} from "../models/api-v1-misc-mastodon-comment429-error1.js";
import {
  apiV1MiscMastodonComment500Error1Schema,
  type ApiV1MiscMastodonComment500Error1,
} from "../models/api-v1-misc-mastodon-comment500-error1.js";
import {
  apiV1MiscMastodonComment502Error1Schema,
  type ApiV1MiscMastodonComment502Error1,
} from "../models/api-v1-misc-mastodon-comment502-error1.js";
import {
  apiV1MiscMastodonComment503Error1Schema,
  type ApiV1MiscMastodonComment503Error1,
} from "../models/api-v1-misc-mastodon-comment503-error1.js";
import {
  apiV1MiscMastodonComment504Error1Schema,
  type ApiV1MiscMastodonComment504Error1,
} from "../models/api-v1-misc-mastodon-comment504-error1.js";
import {
  apiV1MiscMastodonStatusRequestSchema,
  type ApiV1MiscMastodonStatusRequest,
} from "../models/api-v1-misc-mastodon-status-request.js";
import {
  apiV1MiscMastodonStatusRequest1Schema,
  type ApiV1MiscMastodonStatusRequest1,
} from "../models/api-v1-misc-mastodon-status-request1.js";
import {
  apiV1MiscMastodonStatusResponseSchema,
  type ApiV1MiscMastodonStatusResponse,
} from "../models/api-v1-misc-mastodon-status-response.js";
import {
  apiV1MiscMastodonStatusResponse1Schema,
  type ApiV1MiscMastodonStatusResponse1,
} from "../models/api-v1-misc-mastodon-status-response1.js";
import {
  apiV1MiscMastodonStatus400Error1Schema,
  type ApiV1MiscMastodonStatus400Error1,
} from "../models/api-v1-misc-mastodon-status400-error1.js";
import {
  apiV1MiscMastodonStatus401Error1Schema,
  type ApiV1MiscMastodonStatus401Error1,
} from "../models/api-v1-misc-mastodon-status401-error1.js";
import {
  apiV1MiscMastodonStatus403Error1Schema,
  type ApiV1MiscMastodonStatus403Error1,
} from "../models/api-v1-misc-mastodon-status403-error1.js";
import {
  apiV1MiscMastodonStatus404Error1Schema,
  type ApiV1MiscMastodonStatus404Error1,
} from "../models/api-v1-misc-mastodon-status404-error1.js";
import {
  apiV1MiscMastodonStatus429Error1Schema,
  type ApiV1MiscMastodonStatus429Error1,
} from "../models/api-v1-misc-mastodon-status429-error1.js";
import {
  apiV1MiscMastodonStatus500Error1Schema,
  type ApiV1MiscMastodonStatus500Error1,
} from "../models/api-v1-misc-mastodon-status500-error1.js";
import {
  apiV1MiscMastodonStatus502Error1Schema,
  type ApiV1MiscMastodonStatus502Error1,
} from "../models/api-v1-misc-mastodon-status502-error1.js";
import {
  apiV1MiscMastodonStatus503Error1Schema,
  type ApiV1MiscMastodonStatus503Error1,
} from "../models/api-v1-misc-mastodon-status503-error1.js";
import {
  apiV1MiscMastodonStatus504Error1Schema,
  type ApiV1MiscMastodonStatus504Error1,
} from "../models/api-v1-misc-mastodon-status504-error1.js";
import {
  apiV1MiscPinterestPinRequestInternalSchema,
  type ApiV1MiscPinterestPinRequest,
} from "../models/api-v1-misc-pinterest-pin-request.js";
import {
  apiV1MiscPinterestPinRequest1Schema,
  type ApiV1MiscPinterestPinRequest1,
} from "../models/api-v1-misc-pinterest-pin-request1.js";
import {
  apiV1MiscPinterestPinResponseSchema,
  type ApiV1MiscPinterestPinResponse,
} from "../models/api-v1-misc-pinterest-pin-response.js";
import {
  apiV1MiscPinterestPinResponse1Schema,
  type ApiV1MiscPinterestPinResponse1,
} from "../models/api-v1-misc-pinterest-pin-response1.js";
import {
  apiV1MiscPinterestPin400Error1Schema,
  type ApiV1MiscPinterestPin400Error1,
} from "../models/api-v1-misc-pinterest-pin400-error1.js";
import {
  apiV1MiscPinterestPin401Error1Schema,
  type ApiV1MiscPinterestPin401Error1,
} from "../models/api-v1-misc-pinterest-pin401-error1.js";
import {
  apiV1MiscPinterestPin403Error1Schema,
  type ApiV1MiscPinterestPin403Error1,
} from "../models/api-v1-misc-pinterest-pin403-error1.js";
import {
  apiV1MiscPinterestPin404Error1Schema,
  type ApiV1MiscPinterestPin404Error1,
} from "../models/api-v1-misc-pinterest-pin404-error1.js";
import {
  apiV1MiscPinterestPin429Error1Schema,
  type ApiV1MiscPinterestPin429Error1,
} from "../models/api-v1-misc-pinterest-pin429-error1.js";
import {
  apiV1MiscPinterestPin500Error1Schema,
  type ApiV1MiscPinterestPin500Error1,
} from "../models/api-v1-misc-pinterest-pin500-error1.js";
import {
  apiV1MiscPinterestPin502Error1Schema,
  type ApiV1MiscPinterestPin502Error1,
} from "../models/api-v1-misc-pinterest-pin502-error1.js";
import {
  apiV1MiscPinterestPin503Error1Schema,
  type ApiV1MiscPinterestPin503Error1,
} from "../models/api-v1-misc-pinterest-pin503-error1.js";
import {
  apiV1MiscPinterestPin504Error1Schema,
  type ApiV1MiscPinterestPin504Error1,
} from "../models/api-v1-misc-pinterest-pin504-error1.js";
import {
  apiV1MiscRedditCommentRequestInternalSchema,
  type ApiV1MiscRedditCommentRequest,
} from "../models/api-v1-misc-reddit-comment-request.js";
import {
  apiV1MiscRedditCommentRequest1Schema,
  type ApiV1MiscRedditCommentRequest1,
} from "../models/api-v1-misc-reddit-comment-request1.js";
import {
  apiV1MiscRedditCommentResponseSchema,
  type ApiV1MiscRedditCommentResponse,
} from "../models/api-v1-misc-reddit-comment-response.js";
import {
  apiV1MiscRedditCommentResponse1Schema,
  type ApiV1MiscRedditCommentResponse1,
} from "../models/api-v1-misc-reddit-comment-response1.js";
import {
  apiV1MiscRedditComment400Error1Schema,
  type ApiV1MiscRedditComment400Error1,
} from "../models/api-v1-misc-reddit-comment400-error1.js";
import {
  apiV1MiscRedditComment401Error1Schema,
  type ApiV1MiscRedditComment401Error1,
} from "../models/api-v1-misc-reddit-comment401-error1.js";
import {
  apiV1MiscRedditComment403Error1Schema,
  type ApiV1MiscRedditComment403Error1,
} from "../models/api-v1-misc-reddit-comment403-error1.js";
import {
  apiV1MiscRedditComment404Error1Schema,
  type ApiV1MiscRedditComment404Error1,
} from "../models/api-v1-misc-reddit-comment404-error1.js";
import {
  apiV1MiscRedditComment429Error1Schema,
  type ApiV1MiscRedditComment429Error1,
} from "../models/api-v1-misc-reddit-comment429-error1.js";
import {
  apiV1MiscRedditComment500Error1Schema,
  type ApiV1MiscRedditComment500Error1,
} from "../models/api-v1-misc-reddit-comment500-error1.js";
import {
  apiV1MiscRedditComment502Error1Schema,
  type ApiV1MiscRedditComment502Error1,
} from "../models/api-v1-misc-reddit-comment502-error1.js";
import {
  apiV1MiscRedditComment503Error1Schema,
  type ApiV1MiscRedditComment503Error1,
} from "../models/api-v1-misc-reddit-comment503-error1.js";
import {
  apiV1MiscRedditComment504Error1Schema,
  type ApiV1MiscRedditComment504Error1,
} from "../models/api-v1-misc-reddit-comment504-error1.js";
import {
  apiV1MiscRedditPostRequestSchema,
  type ApiV1MiscRedditPostRequest,
} from "../models/api-v1-misc-reddit-post-request.js";
import {
  apiV1MiscRedditPostRequest1Schema,
  type ApiV1MiscRedditPostRequest1,
} from "../models/api-v1-misc-reddit-post-request1.js";
import {
  apiV1MiscRedditPostRequirementsResponseSchema,
  type ApiV1MiscRedditPostRequirementsResponse,
} from "../models/api-v1-misc-reddit-post-requirements-response.js";
import {
  apiV1MiscRedditPostRequirements400Error1Schema,
  type ApiV1MiscRedditPostRequirements400Error1,
} from "../models/api-v1-misc-reddit-post-requirements400-error1.js";
import {
  apiV1MiscRedditPostRequirements401Error1Schema,
  type ApiV1MiscRedditPostRequirements401Error1,
} from "../models/api-v1-misc-reddit-post-requirements401-error1.js";
import {
  apiV1MiscRedditPostRequirements403Error1Schema,
  type ApiV1MiscRedditPostRequirements403Error1,
} from "../models/api-v1-misc-reddit-post-requirements403-error1.js";
import {
  apiV1MiscRedditPostRequirements404Error1Schema,
  type ApiV1MiscRedditPostRequirements404Error1,
} from "../models/api-v1-misc-reddit-post-requirements404-error1.js";
import {
  apiV1MiscRedditPostRequirements429Error1Schema,
  type ApiV1MiscRedditPostRequirements429Error1,
} from "../models/api-v1-misc-reddit-post-requirements429-error1.js";
import {
  apiV1MiscRedditPostRequirements500Error1Schema,
  type ApiV1MiscRedditPostRequirements500Error1,
} from "../models/api-v1-misc-reddit-post-requirements500-error1.js";
import {
  apiV1MiscRedditPostRequirements502Error1Schema,
  type ApiV1MiscRedditPostRequirements502Error1,
} from "../models/api-v1-misc-reddit-post-requirements502-error1.js";
import {
  apiV1MiscRedditPostRequirements503Error1Schema,
  type ApiV1MiscRedditPostRequirements503Error1,
} from "../models/api-v1-misc-reddit-post-requirements503-error1.js";
import {
  apiV1MiscRedditPostRequirements504Error1Schema,
  type ApiV1MiscRedditPostRequirements504Error1,
} from "../models/api-v1-misc-reddit-post-requirements504-error1.js";
import {
  apiV1MiscRedditPostResponseSchema,
  type ApiV1MiscRedditPostResponse,
} from "../models/api-v1-misc-reddit-post-response.js";
import {
  apiV1MiscRedditPostResponse1Schema,
  type ApiV1MiscRedditPostResponse1,
} from "../models/api-v1-misc-reddit-post-response1.js";
import {
  apiV1MiscRedditPost400Error1Schema,
  type ApiV1MiscRedditPost400Error1,
} from "../models/api-v1-misc-reddit-post400-error1.js";
import {
  apiV1MiscRedditPost401Error1Schema,
  type ApiV1MiscRedditPost401Error1,
} from "../models/api-v1-misc-reddit-post401-error1.js";
import {
  apiV1MiscRedditPost403Error1Schema,
  type ApiV1MiscRedditPost403Error1,
} from "../models/api-v1-misc-reddit-post403-error1.js";
import {
  apiV1MiscRedditPost404Error1Schema,
  type ApiV1MiscRedditPost404Error1,
} from "../models/api-v1-misc-reddit-post404-error1.js";
import {
  apiV1MiscRedditPost429Error1Schema,
  type ApiV1MiscRedditPost429Error1,
} from "../models/api-v1-misc-reddit-post429-error1.js";
import {
  apiV1MiscRedditPost500Error1Schema,
  type ApiV1MiscRedditPost500Error1,
} from "../models/api-v1-misc-reddit-post500-error1.js";
import {
  apiV1MiscRedditPost502Error1Schema,
  type ApiV1MiscRedditPost502Error1,
} from "../models/api-v1-misc-reddit-post502-error1.js";
import {
  apiV1MiscRedditPost503Error1Schema,
  type ApiV1MiscRedditPost503Error1,
} from "../models/api-v1-misc-reddit-post503-error1.js";
import {
  apiV1MiscRedditPost504Error1Schema,
  type ApiV1MiscRedditPost504Error1,
} from "../models/api-v1-misc-reddit-post504-error1.js";
import {
  apiV1MiscRedditSubredditFlairsResponseSchema,
  type ApiV1MiscRedditSubredditFlairsResponse,
} from "../models/api-v1-misc-reddit-subreddit-flairs-response.js";
import {
  apiV1MiscRedditSubredditFlairs400Error1Schema,
  type ApiV1MiscRedditSubredditFlairs400Error1,
} from "../models/api-v1-misc-reddit-subreddit-flairs400-error1.js";
import {
  apiV1MiscRedditSubredditFlairs401Error1Schema,
  type ApiV1MiscRedditSubredditFlairs401Error1,
} from "../models/api-v1-misc-reddit-subreddit-flairs401-error1.js";
import {
  apiV1MiscRedditSubredditFlairs403Error1Schema,
  type ApiV1MiscRedditSubredditFlairs403Error1,
} from "../models/api-v1-misc-reddit-subreddit-flairs403-error1.js";
import {
  apiV1MiscRedditSubredditFlairs404Error1Schema,
  type ApiV1MiscRedditSubredditFlairs404Error1,
} from "../models/api-v1-misc-reddit-subreddit-flairs404-error1.js";
import {
  apiV1MiscRedditSubredditFlairs429Error1Schema,
  type ApiV1MiscRedditSubredditFlairs429Error1,
} from "../models/api-v1-misc-reddit-subreddit-flairs429-error1.js";
import {
  apiV1MiscRedditSubredditFlairs500Error1Schema,
  type ApiV1MiscRedditSubredditFlairs500Error1,
} from "../models/api-v1-misc-reddit-subreddit-flairs500-error1.js";
import {
  apiV1MiscRedditSubredditFlairs502Error1Schema,
  type ApiV1MiscRedditSubredditFlairs502Error1,
} from "../models/api-v1-misc-reddit-subreddit-flairs502-error1.js";
import {
  apiV1MiscRedditSubredditFlairs503Error1Schema,
  type ApiV1MiscRedditSubredditFlairs503Error1,
} from "../models/api-v1-misc-reddit-subreddit-flairs503-error1.js";
import {
  apiV1MiscRedditSubredditFlairs504Error1Schema,
  type ApiV1MiscRedditSubredditFlairs504Error1,
} from "../models/api-v1-misc-reddit-subreddit-flairs504-error1.js";
import {
  apiV1MiscSlackMessageRequestSchema,
  type ApiV1MiscSlackMessageRequest,
} from "../models/api-v1-misc-slack-message-request.js";
import {
  apiV1MiscSlackMessageRequest1Schema,
  type ApiV1MiscSlackMessageRequest1,
} from "../models/api-v1-misc-slack-message-request1.js";
import {
  apiV1MiscSlackMessageResponseSchema,
  type ApiV1MiscSlackMessageResponse,
} from "../models/api-v1-misc-slack-message-response.js";
import {
  apiV1MiscSlackMessageResponse1Schema,
  type ApiV1MiscSlackMessageResponse1,
} from "../models/api-v1-misc-slack-message-response1.js";
import {
  apiV1MiscSlackMessage400Error1Schema,
  type ApiV1MiscSlackMessage400Error1,
} from "../models/api-v1-misc-slack-message400-error1.js";
import {
  apiV1MiscSlackMessage401Error1Schema,
  type ApiV1MiscSlackMessage401Error1,
} from "../models/api-v1-misc-slack-message401-error1.js";
import {
  apiV1MiscSlackMessage403Error1Schema,
  type ApiV1MiscSlackMessage403Error1,
} from "../models/api-v1-misc-slack-message403-error1.js";
import {
  apiV1MiscSlackMessage404Error1Schema,
  type ApiV1MiscSlackMessage404Error1,
} from "../models/api-v1-misc-slack-message404-error1.js";
import {
  apiV1MiscSlackMessage429Error1Schema,
  type ApiV1MiscSlackMessage429Error1,
} from "../models/api-v1-misc-slack-message429-error1.js";
import {
  apiV1MiscSlackMessage500Error1Schema,
  type ApiV1MiscSlackMessage500Error1,
} from "../models/api-v1-misc-slack-message500-error1.js";
import {
  apiV1MiscSlackMessage502Error1Schema,
  type ApiV1MiscSlackMessage502Error1,
} from "../models/api-v1-misc-slack-message502-error1.js";
import {
  apiV1MiscSlackMessage503Error1Schema,
  type ApiV1MiscSlackMessage503Error1,
} from "../models/api-v1-misc-slack-message503-error1.js";
import {
  apiV1MiscSlackMessage504Error1Schema,
  type ApiV1MiscSlackMessage504Error1,
} from "../models/api-v1-misc-slack-message504-error1.js";
import {
  apiV1MiscTiktokCmlTrendingListResponseInternalSchema,
  type ApiV1MiscTiktokCmlTrendingListResponse,
} from "../models/api-v1-misc-tiktok-cml-trending-list-response.js";
import {
  apiV1MiscTiktokCmlTrendingList400Error1Schema,
  type ApiV1MiscTiktokCmlTrendingList400Error1,
} from "../models/api-v1-misc-tiktok-cml-trending-list400-error1.js";
import {
  apiV1MiscTiktokCmlTrendingList401Error1Schema,
  type ApiV1MiscTiktokCmlTrendingList401Error1,
} from "../models/api-v1-misc-tiktok-cml-trending-list401-error1.js";
import {
  apiV1MiscTiktokCmlTrendingList403Error1Schema,
  type ApiV1MiscTiktokCmlTrendingList403Error1,
} from "../models/api-v1-misc-tiktok-cml-trending-list403-error1.js";
import {
  apiV1MiscTiktokCmlTrendingList404Error1Schema,
  type ApiV1MiscTiktokCmlTrendingList404Error1,
} from "../models/api-v1-misc-tiktok-cml-trending-list404-error1.js";
import {
  apiV1MiscTiktokCmlTrendingList429Error1Schema,
  type ApiV1MiscTiktokCmlTrendingList429Error1,
} from "../models/api-v1-misc-tiktok-cml-trending-list429-error1.js";
import {
  apiV1MiscTiktokCmlTrendingList500Error1Schema,
  type ApiV1MiscTiktokCmlTrendingList500Error1,
} from "../models/api-v1-misc-tiktok-cml-trending-list500-error1.js";
import {
  apiV1MiscTiktokCmlTrendingList502Error1Schema,
  type ApiV1MiscTiktokCmlTrendingList502Error1,
} from "../models/api-v1-misc-tiktok-cml-trending-list502-error1.js";
import {
  apiV1MiscTiktokCmlTrendingList503Error1Schema,
  type ApiV1MiscTiktokCmlTrendingList503Error1,
} from "../models/api-v1-misc-tiktok-cml-trending-list503-error1.js";
import {
  apiV1MiscTiktokCmlTrendingList504Error1Schema,
  type ApiV1MiscTiktokCmlTrendingList504Error1,
} from "../models/api-v1-misc-tiktok-cml-trending-list504-error1.js";
import {
  apiV1MiscTiktokCommentRequestSchema,
  type ApiV1MiscTiktokCommentRequest,
} from "../models/api-v1-misc-tiktok-comment-request.js";
import {
  apiV1MiscTiktokCommentResponseSchema,
  type ApiV1MiscTiktokCommentResponse,
} from "../models/api-v1-misc-tiktok-comment-response.js";
import {
  apiV1MiscTiktokComment400Error1Schema,
  type ApiV1MiscTiktokComment400Error1,
} from "../models/api-v1-misc-tiktok-comment400-error1.js";
import {
  apiV1MiscTiktokComment401Error1Schema,
  type ApiV1MiscTiktokComment401Error1,
} from "../models/api-v1-misc-tiktok-comment401-error1.js";
import {
  apiV1MiscTiktokComment403Error1Schema,
  type ApiV1MiscTiktokComment403Error1,
} from "../models/api-v1-misc-tiktok-comment403-error1.js";
import {
  apiV1MiscTiktokComment404Error1Schema,
  type ApiV1MiscTiktokComment404Error1,
} from "../models/api-v1-misc-tiktok-comment404-error1.js";
import {
  apiV1MiscTiktokComment429Error1Schema,
  type ApiV1MiscTiktokComment429Error1,
} from "../models/api-v1-misc-tiktok-comment429-error1.js";
import {
  apiV1MiscTiktokComment500Error1Schema,
  type ApiV1MiscTiktokComment500Error1,
} from "../models/api-v1-misc-tiktok-comment500-error1.js";
import {
  apiV1MiscTiktokComment502Error1Schema,
  type ApiV1MiscTiktokComment502Error1,
} from "../models/api-v1-misc-tiktok-comment502-error1.js";
import {
  apiV1MiscTiktokComment503Error1Schema,
  type ApiV1MiscTiktokComment503Error1,
} from "../models/api-v1-misc-tiktok-comment503-error1.js";
import {
  apiV1MiscTiktokComment504Error1Schema,
  type ApiV1MiscTiktokComment504Error1,
} from "../models/api-v1-misc-tiktok-comment504-error1.js";
import {
  apiV1MiscTiktokLocationsResponseSchema,
  type ApiV1MiscTiktokLocationsResponse,
} from "../models/api-v1-misc-tiktok-locations-response.js";
import {
  apiV1MiscTiktokLocations400Error1Schema,
  type ApiV1MiscTiktokLocations400Error1,
} from "../models/api-v1-misc-tiktok-locations400-error1.js";
import {
  apiV1MiscTiktokLocations401Error1Schema,
  type ApiV1MiscTiktokLocations401Error1,
} from "../models/api-v1-misc-tiktok-locations401-error1.js";
import {
  apiV1MiscTiktokLocations403Error1Schema,
  type ApiV1MiscTiktokLocations403Error1,
} from "../models/api-v1-misc-tiktok-locations403-error1.js";
import {
  apiV1MiscTiktokLocations404Error1Schema,
  type ApiV1MiscTiktokLocations404Error1,
} from "../models/api-v1-misc-tiktok-locations404-error1.js";
import {
  apiV1MiscTiktokLocations429Error1Schema,
  type ApiV1MiscTiktokLocations429Error1,
} from "../models/api-v1-misc-tiktok-locations429-error1.js";
import {
  apiV1MiscTiktokLocations500Error1Schema,
  type ApiV1MiscTiktokLocations500Error1,
} from "../models/api-v1-misc-tiktok-locations500-error1.js";
import {
  apiV1MiscTiktokLocations502Error1Schema,
  type ApiV1MiscTiktokLocations502Error1,
} from "../models/api-v1-misc-tiktok-locations502-error1.js";
import {
  apiV1MiscTiktokLocations503Error1Schema,
  type ApiV1MiscTiktokLocations503Error1,
} from "../models/api-v1-misc-tiktok-locations503-error1.js";
import {
  apiV1MiscTiktokLocations504Error1Schema,
  type ApiV1MiscTiktokLocations504Error1,
} from "../models/api-v1-misc-tiktok-locations504-error1.js";
import {
  apiV1MiscTiktokPostSettingsResponseSchema,
  type ApiV1MiscTiktokPostSettingsResponse,
} from "../models/api-v1-misc-tiktok-post-settings-response.js";
import {
  apiV1MiscTiktokPostSettings400Error1Schema,
  type ApiV1MiscTiktokPostSettings400Error1,
} from "../models/api-v1-misc-tiktok-post-settings400-error1.js";
import {
  apiV1MiscTiktokPostSettings401Error1Schema,
  type ApiV1MiscTiktokPostSettings401Error1,
} from "../models/api-v1-misc-tiktok-post-settings401-error1.js";
import {
  apiV1MiscTiktokPostSettings403Error1Schema,
  type ApiV1MiscTiktokPostSettings403Error1,
} from "../models/api-v1-misc-tiktok-post-settings403-error1.js";
import {
  apiV1MiscTiktokPostSettings404Error1Schema,
  type ApiV1MiscTiktokPostSettings404Error1,
} from "../models/api-v1-misc-tiktok-post-settings404-error1.js";
import {
  apiV1MiscTiktokPostSettings429Error1Schema,
  type ApiV1MiscTiktokPostSettings429Error1,
} from "../models/api-v1-misc-tiktok-post-settings429-error1.js";
import {
  apiV1MiscTiktokPostSettings500Error1Schema,
  type ApiV1MiscTiktokPostSettings500Error1,
} from "../models/api-v1-misc-tiktok-post-settings500-error1.js";
import {
  apiV1MiscTiktokPostSettings502Error1Schema,
  type ApiV1MiscTiktokPostSettings502Error1,
} from "../models/api-v1-misc-tiktok-post-settings502-error1.js";
import {
  apiV1MiscTiktokPostSettings503Error1Schema,
  type ApiV1MiscTiktokPostSettings503Error1,
} from "../models/api-v1-misc-tiktok-post-settings503-error1.js";
import {
  apiV1MiscTiktokPostSettings504Error1Schema,
  type ApiV1MiscTiktokPostSettings504Error1,
} from "../models/api-v1-misc-tiktok-post-settings504-error1.js";
import {
  apiV1MiscTwitterCommentRequestSchema,
  type ApiV1MiscTwitterCommentRequest,
} from "../models/api-v1-misc-twitter-comment-request.js";
import {
  apiV1MiscTwitterCommentResponseSchema,
  type ApiV1MiscTwitterCommentResponse,
} from "../models/api-v1-misc-twitter-comment-response.js";
import {
  apiV1MiscTwitterComment400Error1Schema,
  type ApiV1MiscTwitterComment400Error1,
} from "../models/api-v1-misc-twitter-comment400-error1.js";
import {
  apiV1MiscTwitterComment401Error1Schema,
  type ApiV1MiscTwitterComment401Error1,
} from "../models/api-v1-misc-twitter-comment401-error1.js";
import {
  apiV1MiscTwitterComment403Error1Schema,
  type ApiV1MiscTwitterComment403Error1,
} from "../models/api-v1-misc-twitter-comment403-error1.js";
import {
  apiV1MiscTwitterComment404Error1Schema,
  type ApiV1MiscTwitterComment404Error1,
} from "../models/api-v1-misc-twitter-comment404-error1.js";
import {
  apiV1MiscTwitterComment429Error1Schema,
  type ApiV1MiscTwitterComment429Error1,
} from "../models/api-v1-misc-twitter-comment429-error1.js";
import {
  apiV1MiscTwitterComment500Error1Schema,
  type ApiV1MiscTwitterComment500Error1,
} from "../models/api-v1-misc-twitter-comment500-error1.js";
import {
  apiV1MiscTwitterComment502Error1Schema,
  type ApiV1MiscTwitterComment502Error1,
} from "../models/api-v1-misc-twitter-comment502-error1.js";
import {
  apiV1MiscTwitterComment503Error1Schema,
  type ApiV1MiscTwitterComment503Error1,
} from "../models/api-v1-misc-twitter-comment503-error1.js";
import {
  apiV1MiscTwitterComment504Error1Schema,
  type ApiV1MiscTwitterComment504Error1,
} from "../models/api-v1-misc-twitter-comment504-error1.js";
import {
  apiV1MiscTwitterRetweetRequestInternalSchema,
  type ApiV1MiscTwitterRetweetRequest,
} from "../models/api-v1-misc-twitter-retweet-request.js";
import {
  apiV1MiscTwitterRetweetResponseSchema,
  type ApiV1MiscTwitterRetweetResponse,
} from "../models/api-v1-misc-twitter-retweet-response.js";
import {
  apiV1MiscTwitterRetweet400Error1Schema,
  type ApiV1MiscTwitterRetweet400Error1,
} from "../models/api-v1-misc-twitter-retweet400-error1.js";
import {
  apiV1MiscTwitterRetweet401Error1Schema,
  type ApiV1MiscTwitterRetweet401Error1,
} from "../models/api-v1-misc-twitter-retweet401-error1.js";
import {
  apiV1MiscTwitterRetweet403Error1Schema,
  type ApiV1MiscTwitterRetweet403Error1,
} from "../models/api-v1-misc-twitter-retweet403-error1.js";
import {
  apiV1MiscTwitterRetweet404Error1Schema,
  type ApiV1MiscTwitterRetweet404Error1,
} from "../models/api-v1-misc-twitter-retweet404-error1.js";
import {
  apiV1MiscTwitterRetweet429Error1Schema,
  type ApiV1MiscTwitterRetweet429Error1,
} from "../models/api-v1-misc-twitter-retweet429-error1.js";
import {
  apiV1MiscTwitterRetweet500Error1Schema,
  type ApiV1MiscTwitterRetweet500Error1,
} from "../models/api-v1-misc-twitter-retweet500-error1.js";
import {
  apiV1MiscTwitterRetweet502Error1Schema,
  type ApiV1MiscTwitterRetweet502Error1,
} from "../models/api-v1-misc-twitter-retweet502-error1.js";
import {
  apiV1MiscTwitterRetweet503Error1Schema,
  type ApiV1MiscTwitterRetweet503Error1,
} from "../models/api-v1-misc-twitter-retweet503-error1.js";
import {
  apiV1MiscTwitterRetweet504Error1Schema,
  type ApiV1MiscTwitterRetweet504Error1,
} from "../models/api-v1-misc-twitter-retweet504-error1.js";
import {
  apiV1MiscTwitterTweetRequestSchema,
  type ApiV1MiscTwitterTweetRequest,
} from "../models/api-v1-misc-twitter-tweet-request.js";
import {
  apiV1MiscTwitterTweetResponseSchema,
  type ApiV1MiscTwitterTweetResponse,
} from "../models/api-v1-misc-twitter-tweet-response.js";
import {
  apiV1MiscTwitterTweet400Error1Schema,
  type ApiV1MiscTwitterTweet400Error1,
} from "../models/api-v1-misc-twitter-tweet400-error1.js";
import {
  apiV1MiscTwitterTweet401Error1Schema,
  type ApiV1MiscTwitterTweet401Error1,
} from "../models/api-v1-misc-twitter-tweet401-error1.js";
import {
  apiV1MiscTwitterTweet403Error1Schema,
  type ApiV1MiscTwitterTweet403Error1,
} from "../models/api-v1-misc-twitter-tweet403-error1.js";
import {
  apiV1MiscTwitterTweet404Error1Schema,
  type ApiV1MiscTwitterTweet404Error1,
} from "../models/api-v1-misc-twitter-tweet404-error1.js";
import {
  apiV1MiscTwitterTweet429Error1Schema,
  type ApiV1MiscTwitterTweet429Error1,
} from "../models/api-v1-misc-twitter-tweet429-error1.js";
import {
  apiV1MiscTwitterTweet500Error1Schema,
  type ApiV1MiscTwitterTweet500Error1,
} from "../models/api-v1-misc-twitter-tweet500-error1.js";
import {
  apiV1MiscTwitterTweet502Error1Schema,
  type ApiV1MiscTwitterTweet502Error1,
} from "../models/api-v1-misc-twitter-tweet502-error1.js";
import {
  apiV1MiscTwitterTweet503Error1Schema,
  type ApiV1MiscTwitterTweet503Error1,
} from "../models/api-v1-misc-twitter-tweet503-error1.js";
import {
  apiV1MiscTwitterTweet504Error1Schema,
  type ApiV1MiscTwitterTweet504Error1,
} from "../models/api-v1-misc-twitter-tweet504-error1.js";
import {
  apiV1MiscYoutubeCommentRequestInternalSchema,
  type ApiV1MiscYoutubeCommentRequest,
} from "../models/api-v1-misc-youtube-comment-request.js";
import {
  apiV1MiscYoutubeCommentRequest1Schema,
  type ApiV1MiscYoutubeCommentRequest1,
} from "../models/api-v1-misc-youtube-comment-request1.js";
import {
  apiV1MiscYoutubeCommentResponseSchema,
  type ApiV1MiscYoutubeCommentResponse,
} from "../models/api-v1-misc-youtube-comment-response.js";
import {
  apiV1MiscYoutubeCommentResponse1Schema,
  type ApiV1MiscYoutubeCommentResponse1,
} from "../models/api-v1-misc-youtube-comment-response1.js";
import {
  apiV1MiscYoutubeComment400Error1Schema,
  type ApiV1MiscYoutubeComment400Error1,
} from "../models/api-v1-misc-youtube-comment400-error1.js";
import {
  apiV1MiscYoutubeComment401Error1Schema,
  type ApiV1MiscYoutubeComment401Error1,
} from "../models/api-v1-misc-youtube-comment401-error1.js";
import {
  apiV1MiscYoutubeComment403Error1Schema,
  type ApiV1MiscYoutubeComment403Error1,
} from "../models/api-v1-misc-youtube-comment403-error1.js";
import {
  apiV1MiscYoutubeComment404Error1Schema,
  type ApiV1MiscYoutubeComment404Error1,
} from "../models/api-v1-misc-youtube-comment404-error1.js";
import {
  apiV1MiscYoutubeComment429Error1Schema,
  type ApiV1MiscYoutubeComment429Error1,
} from "../models/api-v1-misc-youtube-comment429-error1.js";
import {
  apiV1MiscYoutubeComment500Error1Schema,
  type ApiV1MiscYoutubeComment500Error1,
} from "../models/api-v1-misc-youtube-comment500-error1.js";
import {
  apiV1MiscYoutubeComment502Error1Schema,
  type ApiV1MiscYoutubeComment502Error1,
} from "../models/api-v1-misc-youtube-comment502-error1.js";
import {
  apiV1MiscYoutubeComment503Error1Schema,
  type ApiV1MiscYoutubeComment503Error1,
} from "../models/api-v1-misc-youtube-comment503-error1.js";
import {
  apiV1MiscYoutubeComment504Error1Schema,
  type ApiV1MiscYoutubeComment504Error1,
} from "../models/api-v1-misc-youtube-comment504-error1.js";
import {
  apiV1MiscYoutubePlaylistItemsRequestInternalSchema,
  type ApiV1MiscYoutubePlaylistItemsRequest,
} from "../models/api-v1-misc-youtube-playlist-items-request.js";
import {
  apiV1MiscYoutubePlaylistItemsResponseInternalSchema,
  type ApiV1MiscYoutubePlaylistItemsResponse,
} from "../models/api-v1-misc-youtube-playlist-items-response.js";
import {
  apiV1MiscYoutubePlaylistItemsResponse1InternalSchema,
  type ApiV1MiscYoutubePlaylistItemsResponse1,
} from "../models/api-v1-misc-youtube-playlist-items-response1.js";
import {
  apiV1MiscYoutubePlaylistItems400Error1Schema,
  type ApiV1MiscYoutubePlaylistItems400Error1,
} from "../models/api-v1-misc-youtube-playlist-items400-error1.js";
import {
  apiV1MiscYoutubePlaylistItems401Error1Schema,
  type ApiV1MiscYoutubePlaylistItems401Error1,
} from "../models/api-v1-misc-youtube-playlist-items401-error1.js";
import {
  apiV1MiscYoutubePlaylistItems403Error1Schema,
  type ApiV1MiscYoutubePlaylistItems403Error1,
} from "../models/api-v1-misc-youtube-playlist-items403-error1.js";
import {
  apiV1MiscYoutubePlaylistItems404Error1Schema,
  type ApiV1MiscYoutubePlaylistItems404Error1,
} from "../models/api-v1-misc-youtube-playlist-items404-error1.js";
import {
  apiV1MiscYoutubePlaylistItems429Error1Schema,
  type ApiV1MiscYoutubePlaylistItems429Error1,
} from "../models/api-v1-misc-youtube-playlist-items429-error1.js";
import {
  apiV1MiscYoutubePlaylistItems500Error1Schema,
  type ApiV1MiscYoutubePlaylistItems500Error1,
} from "../models/api-v1-misc-youtube-playlist-items500-error1.js";
import {
  apiV1MiscYoutubePlaylistItems502Error1Schema,
  type ApiV1MiscYoutubePlaylistItems502Error1,
} from "../models/api-v1-misc-youtube-playlist-items502-error1.js";
import {
  apiV1MiscYoutubePlaylistItems503Error1Schema,
  type ApiV1MiscYoutubePlaylistItems503Error1,
} from "../models/api-v1-misc-youtube-playlist-items503-error1.js";
import {
  apiV1MiscYoutubePlaylistItems504Error1Schema,
  type ApiV1MiscYoutubePlaylistItems504Error1,
} from "../models/api-v1-misc-youtube-playlist-items504-error1.js";
import {
  apiV1MiscYoutubePlaylistRequestSchema,
  type ApiV1MiscYoutubePlaylistRequest,
} from "../models/api-v1-misc-youtube-playlist-request.js";
import {
  apiV1MiscYoutubePlaylistRequest1Schema,
  type ApiV1MiscYoutubePlaylistRequest1,
} from "../models/api-v1-misc-youtube-playlist-request1.js";
import {
  apiV1MiscYoutubePlaylistResponseInternalSchema,
  type ApiV1MiscYoutubePlaylistResponse,
} from "../models/api-v1-misc-youtube-playlist-response.js";
import {
  apiV1MiscYoutubePlaylistResponse1InternalSchema,
  type ApiV1MiscYoutubePlaylistResponse1,
} from "../models/api-v1-misc-youtube-playlist-response1.js";
import {
  apiV1MiscYoutubePlaylist400Error1Schema,
  type ApiV1MiscYoutubePlaylist400Error1,
} from "../models/api-v1-misc-youtube-playlist400-error1.js";
import {
  apiV1MiscYoutubePlaylist401Error1Schema,
  type ApiV1MiscYoutubePlaylist401Error1,
} from "../models/api-v1-misc-youtube-playlist401-error1.js";
import {
  apiV1MiscYoutubePlaylist403Error1Schema,
  type ApiV1MiscYoutubePlaylist403Error1,
} from "../models/api-v1-misc-youtube-playlist403-error1.js";
import {
  apiV1MiscYoutubePlaylist404Error1Schema,
  type ApiV1MiscYoutubePlaylist404Error1,
} from "../models/api-v1-misc-youtube-playlist404-error1.js";
import {
  apiV1MiscYoutubePlaylist429Error1Schema,
  type ApiV1MiscYoutubePlaylist429Error1,
} from "../models/api-v1-misc-youtube-playlist429-error1.js";
import {
  apiV1MiscYoutubePlaylist500Error1Schema,
  type ApiV1MiscYoutubePlaylist500Error1,
} from "../models/api-v1-misc-youtube-playlist500-error1.js";
import {
  apiV1MiscYoutubePlaylist502Error1Schema,
  type ApiV1MiscYoutubePlaylist502Error1,
} from "../models/api-v1-misc-youtube-playlist502-error1.js";
import {
  apiV1MiscYoutubePlaylist503Error1Schema,
  type ApiV1MiscYoutubePlaylist503Error1,
} from "../models/api-v1-misc-youtube-playlist503-error1.js";
import {
  apiV1MiscYoutubePlaylist504Error1Schema,
  type ApiV1MiscYoutubePlaylist504Error1,
} from "../models/api-v1-misc-youtube-playlist504-error1.js";
import {
  apiV1MiscYoutubeRegionsResponseSchema,
  type ApiV1MiscYoutubeRegionsResponse,
} from "../models/api-v1-misc-youtube-regions-response.js";
import {
  apiV1MiscYoutubeRegions400Error1Schema,
  type ApiV1MiscYoutubeRegions400Error1,
} from "../models/api-v1-misc-youtube-regions400-error1.js";
import {
  apiV1MiscYoutubeRegions401Error1Schema,
  type ApiV1MiscYoutubeRegions401Error1,
} from "../models/api-v1-misc-youtube-regions401-error1.js";
import {
  apiV1MiscYoutubeRegions403Error1Schema,
  type ApiV1MiscYoutubeRegions403Error1,
} from "../models/api-v1-misc-youtube-regions403-error1.js";
import {
  apiV1MiscYoutubeRegions404Error1Schema,
  type ApiV1MiscYoutubeRegions404Error1,
} from "../models/api-v1-misc-youtube-regions404-error1.js";
import {
  apiV1MiscYoutubeRegions429Error1Schema,
  type ApiV1MiscYoutubeRegions429Error1,
} from "../models/api-v1-misc-youtube-regions429-error1.js";
import {
  apiV1MiscYoutubeRegions500Error1Schema,
  type ApiV1MiscYoutubeRegions500Error1,
} from "../models/api-v1-misc-youtube-regions500-error1.js";
import {
  apiV1MiscYoutubeRegions502Error1Schema,
  type ApiV1MiscYoutubeRegions502Error1,
} from "../models/api-v1-misc-youtube-regions502-error1.js";
import {
  apiV1MiscYoutubeRegions503Error1Schema,
  type ApiV1MiscYoutubeRegions503Error1,
} from "../models/api-v1-misc-youtube-regions503-error1.js";
import {
  apiV1MiscYoutubeRegions504Error1Schema,
  type ApiV1MiscYoutubeRegions504Error1,
} from "../models/api-v1-misc-youtube-regions504-error1.js";
import {
  apiV1MiscYoutubeThumbnailRequestSchema,
  type ApiV1MiscYoutubeThumbnailRequest,
} from "../models/api-v1-misc-youtube-thumbnail-request.js";
import {
  apiV1MiscYoutubeThumbnailResponseInternalSchema,
  type ApiV1MiscYoutubeThumbnailResponse,
} from "../models/api-v1-misc-youtube-thumbnail-response.js";
import {
  apiV1MiscYoutubeThumbnail400Error1Schema,
  type ApiV1MiscYoutubeThumbnail400Error1,
} from "../models/api-v1-misc-youtube-thumbnail400-error1.js";
import {
  apiV1MiscYoutubeThumbnail401Error1Schema,
  type ApiV1MiscYoutubeThumbnail401Error1,
} from "../models/api-v1-misc-youtube-thumbnail401-error1.js";
import {
  apiV1MiscYoutubeThumbnail403Error1Schema,
  type ApiV1MiscYoutubeThumbnail403Error1,
} from "../models/api-v1-misc-youtube-thumbnail403-error1.js";
import {
  apiV1MiscYoutubeThumbnail404Error1Schema,
  type ApiV1MiscYoutubeThumbnail404Error1,
} from "../models/api-v1-misc-youtube-thumbnail404-error1.js";
import {
  apiV1MiscYoutubeThumbnail429Error1Schema,
  type ApiV1MiscYoutubeThumbnail429Error1,
} from "../models/api-v1-misc-youtube-thumbnail429-error1.js";
import {
  apiV1MiscYoutubeThumbnail500Error1Schema,
  type ApiV1MiscYoutubeThumbnail500Error1,
} from "../models/api-v1-misc-youtube-thumbnail500-error1.js";
import {
  apiV1MiscYoutubeThumbnail502Error1Schema,
  type ApiV1MiscYoutubeThumbnail502Error1,
} from "../models/api-v1-misc-youtube-thumbnail502-error1.js";
import {
  apiV1MiscYoutubeThumbnail503Error1Schema,
  type ApiV1MiscYoutubeThumbnail503Error1,
} from "../models/api-v1-misc-youtube-thumbnail503-error1.js";
import {
  apiV1MiscYoutubeThumbnail504Error1Schema,
  type ApiV1MiscYoutubeThumbnail504Error1,
} from "../models/api-v1-misc-youtube-thumbnail504-error1.js";
import {
  apiV1MiscYoutubeVideoCategoriesResponseSchema,
  type ApiV1MiscYoutubeVideoCategoriesResponse,
} from "../models/api-v1-misc-youtube-video-categories-response.js";
import {
  apiV1MiscYoutubeVideoCategories400Error1Schema,
  type ApiV1MiscYoutubeVideoCategories400Error1,
} from "../models/api-v1-misc-youtube-video-categories400-error1.js";
import {
  apiV1MiscYoutubeVideoCategories401Error1Schema,
  type ApiV1MiscYoutubeVideoCategories401Error1,
} from "../models/api-v1-misc-youtube-video-categories401-error1.js";
import {
  apiV1MiscYoutubeVideoCategories403Error1Schema,
  type ApiV1MiscYoutubeVideoCategories403Error1,
} from "../models/api-v1-misc-youtube-video-categories403-error1.js";
import {
  apiV1MiscYoutubeVideoCategories404Error1Schema,
  type ApiV1MiscYoutubeVideoCategories404Error1,
} from "../models/api-v1-misc-youtube-video-categories404-error1.js";
import {
  apiV1MiscYoutubeVideoCategories429Error1Schema,
  type ApiV1MiscYoutubeVideoCategories429Error1,
} from "../models/api-v1-misc-youtube-video-categories429-error1.js";
import {
  apiV1MiscYoutubeVideoCategories500Error1Schema,
  type ApiV1MiscYoutubeVideoCategories500Error1,
} from "../models/api-v1-misc-youtube-video-categories500-error1.js";
import {
  apiV1MiscYoutubeVideoCategories502Error1Schema,
  type ApiV1MiscYoutubeVideoCategories502Error1,
} from "../models/api-v1-misc-youtube-video-categories502-error1.js";
import {
  apiV1MiscYoutubeVideoCategories503Error1Schema,
  type ApiV1MiscYoutubeVideoCategories503Error1,
} from "../models/api-v1-misc-youtube-video-categories503-error1.js";
import {
  apiV1MiscYoutubeVideoCategories504Error1Schema,
  type ApiV1MiscYoutubeVideoCategories504Error1,
} from "../models/api-v1-misc-youtube-video-categories504-error1.js";
import {
  apiV1MiscYoutubeVideoRequestInternalSchema,
  type ApiV1MiscYoutubeVideoRequest,
} from "../models/api-v1-misc-youtube-video-request.js";
import {
  apiV1MiscYoutubeVideoRequest1Schema,
  type ApiV1MiscYoutubeVideoRequest1,
} from "../models/api-v1-misc-youtube-video-request1.js";
import {
  apiV1MiscYoutubeVideoResponseSchema,
  type ApiV1MiscYoutubeVideoResponse,
} from "../models/api-v1-misc-youtube-video-response.js";
import {
  apiV1MiscYoutubeVideoResponse1Schema,
  type ApiV1MiscYoutubeVideoResponse1,
} from "../models/api-v1-misc-youtube-video-response1.js";
import {
  apiV1MiscYoutubeVideo400Error1Schema,
  type ApiV1MiscYoutubeVideo400Error1,
} from "../models/api-v1-misc-youtube-video400-error1.js";
import {
  apiV1MiscYoutubeVideo401Error1Schema,
  type ApiV1MiscYoutubeVideo401Error1,
} from "../models/api-v1-misc-youtube-video401-error1.js";
import {
  apiV1MiscYoutubeVideo403Error1Schema,
  type ApiV1MiscYoutubeVideo403Error1,
} from "../models/api-v1-misc-youtube-video403-error1.js";
import {
  apiV1MiscYoutubeVideo404Error1Schema,
  type ApiV1MiscYoutubeVideo404Error1,
} from "../models/api-v1-misc-youtube-video404-error1.js";
import {
  apiV1MiscYoutubeVideo429Error1Schema,
  type ApiV1MiscYoutubeVideo429Error1,
} from "../models/api-v1-misc-youtube-video429-error1.js";
import {
  apiV1MiscYoutubeVideo500Error1Schema,
  type ApiV1MiscYoutubeVideo500Error1,
} from "../models/api-v1-misc-youtube-video500-error1.js";
import {
  apiV1MiscYoutubeVideo502Error1Schema,
  type ApiV1MiscYoutubeVideo502Error1,
} from "../models/api-v1-misc-youtube-video502-error1.js";
import {
  apiV1MiscYoutubeVideo503Error1Schema,
  type ApiV1MiscYoutubeVideo503Error1,
} from "../models/api-v1-misc-youtube-video503-error1.js";
import {
  apiV1MiscYoutubeVideo504Error1Schema,
  type ApiV1MiscYoutubeVideo504Error1,
} from "../models/api-v1-misc-youtube-video504-error1.js";
import { audioTypeSchema, type AudioType } from "../models/audio-type.js";
import { DateRange, dateRangeSchema } from "../models/date-range.js";
import {
  fieldBundleSocialMiscApiSchema,
  type FieldBundleSocialMiscApi,
} from "../models/field-bundle-social-misc-api.js";
import { field3Schema, type Field3 } from "../models/field3.js";
import { Genre, genreSchema } from "../models/genre.js";
import { Scope, scopeSchema } from "../models/scope.js";
import { View, viewSchema } from "../models/view.js";
import type { Servers } from "../servers.js";

export class Misc {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Delete a Bluesky comment
   *
   * @remarks
   * Permanently delete a published Bluesky reply/comment.
   *
   * @returns 200
   *
   * @throws {@link Misc.MiscBlueskyDeleteCommentError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  miscBlueskyDeleteComment(
    request: Misc.MiscBlueskyDeleteCommentRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV1MiscBlueskyCommentResponse, Misc.MiscBlueskyDeleteCommentError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v1/misc/bluesky/comment"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1MiscBlueskyCommentRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: apiV1MiscBlueskyCommentResponseSchema },
        errorFactory: Misc.MiscBlueskyDeleteCommentError,
      },
      options,
    );
  }

  /**
   * Delete a Bluesky post
   *
   * @remarks
   * Permanently delete a published Bluesky post.
   *
   * @returns 200
   *
   * @throws {@link Misc.MiscBlueskyDeletePostError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  miscBlueskyDeletePost(
    request: Misc.MiscBlueskyDeletePostRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV1MiscBlueskyPostResponse, Misc.MiscBlueskyDeletePostError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v1/misc/bluesky/post"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1MiscBlueskyPostRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: apiV1MiscBlueskyPostResponseSchema },
        errorFactory: Misc.MiscBlueskyDeletePostError,
      },
      options,
    );
  }

  /**
   * Delete a Discord message
   *
   * @remarks
   * Permanently delete a published Discord message.
   *
   * @returns 200
   *
   * @throws {@link Misc.MiscDiscordDeleteMessageError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  miscDiscordDeleteMessage(
    request: Misc.MiscDiscordDeleteMessageRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV1MiscDiscordMessageResponse, Misc.MiscDiscordDeleteMessageError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v1/misc/discord/message"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1MiscDiscordMessageRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: apiV1MiscDiscordMessageResponseSchema },
        errorFactory: Misc.MiscDiscordDeleteMessageError,
      },
      options,
    );
  }

  /**
   * Delete a Facebook comment
   *
   * @remarks
   * Permanently delete a published Facebook comment.
   *
   * @returns 200
   *
   * @throws {@link Misc.MiscFacebookDeleteCommentError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  miscFacebookDeleteComment(
    request: Misc.MiscFacebookDeleteCommentRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV1MiscFacebookCommentResponse1, Misc.MiscFacebookDeleteCommentError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v1/misc/facebook/comment"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1MiscFacebookCommentRequest1Schema)),
        },
      },
      {
        success: { kind: "json", schema: apiV1MiscFacebookCommentResponse1Schema },
        errorFactory: Misc.MiscFacebookDeleteCommentError,
      },
      options,
    );
  }

  /**
   * Delete a Facebook post
   *
   * @remarks
   * Permanently delete a published Facebook post or reel.
   *
   * @returns 200
   *
   * @throws {@link Misc.MiscFacebookDeletePostError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  miscFacebookDeletePost(
    request: Misc.MiscFacebookDeletePostRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV1MiscFacebookPostResponse1, Misc.MiscFacebookDeletePostError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v1/misc/facebook/post"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1MiscFacebookPostRequest1Schema)),
        },
      },
      {
        success: { kind: "json", schema: apiV1MiscFacebookPostResponse1Schema },
        errorFactory: Misc.MiscFacebookDeletePostError,
      },
      options,
    );
  }

  /**
   * Edit a Facebook comment
   *
   * @remarks
   * Update the text content of a published Facebook comment.
   *
   * @returns 200
   *
   * @throws {@link Misc.MiscFacebookEditCommentError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  miscFacebookEditComment(
    request: Misc.MiscFacebookEditCommentRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV1MiscFacebookCommentResponse, Misc.MiscFacebookEditCommentError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/api/v1/misc/facebook/comment"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1MiscFacebookCommentRequestInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: apiV1MiscFacebookCommentResponseSchema },
        errorFactory: Misc.MiscFacebookEditCommentError,
      },
      options,
    );
  }

  /**
   * Edit an existing Facebook post
   *
   * @remarks
   * Update the message/content of a published Facebook post or reel. Note: Only text content can be
   * edited, media cannot be changed.
   *
   * @returns 200
   *
   * @throws {@link Misc.MiscFacebookEditPostError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  miscFacebookEditPost(
    request: Misc.MiscFacebookEditPostRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV1MiscFacebookPostResponse, Misc.MiscFacebookEditPostError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/api/v1/misc/facebook/post"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1MiscFacebookPostRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: apiV1MiscFacebookPostResponseSchema },
        errorFactory: Misc.MiscFacebookEditPostError,
      },
      options,
    );
  }

  /**
   * Get a single imported Facebook recommendation
   *
   * @remarks
   * Retrieve one imported Facebook recommendation with its rating, text, author, and existing
   * replies.
   *
   * @returns 200
   *
   * @throws {@link Misc.MiscFacebookGetRecommendationByIdError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  miscFacebookGetRecommendationById(
    request: Misc.MiscFacebookGetRecommendationByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1MiscFacebookRecommendationsResponse1, Misc.MiscFacebookGetRecommendationByIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/misc/facebook/recommendations/{recommendationId}"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "recommendationId", value: request.recommendationId, schema: s.string() }],
        query: [{ name: "teamId", value: request.teamId, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1MiscFacebookRecommendationsResponse1Schema },
        errorFactory: Misc.MiscFacebookGetRecommendationByIdError,
      },
      options,
    );
  }

  /**
   * Get recommendation thread comments
   *
   * @remarks
   * List the comments in a Facebook recommendation thread so you can see the full conversation
   * before replying.
   *
   * @returns 200
   *
   * @throws {@link Misc.MiscFacebookGetRecommendationCommentsError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  miscFacebookGetRecommendationComments(
    request: Misc.MiscFacebookGetRecommendationCommentsRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ApiV1MiscFacebookRecommendationsCommentsResponse,
    Misc.MiscFacebookGetRecommendationCommentsError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/api/v1/misc/facebook/recommendations/{recommendationId}/comments",
        ),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "recommendationId", value: request.recommendationId, schema: s.string() }],
        query: [{ name: "teamId", value: request.teamId, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1MiscFacebookRecommendationsCommentsResponseSchema },
        errorFactory: Misc.MiscFacebookGetRecommendationCommentsError,
      },
      options,
    );
  }

  /**
   * Get Facebook recommendations import by ID
   *
   * @remarks
   * Check the status, progress, and result of a single Facebook recommendations import job.
   *
   * @returns 200
   *
   * @throws {@link Misc.MiscFacebookGetRecommendationImportByIdError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  miscFacebookGetRecommendationImportById(
    request: Misc.MiscFacebookGetRecommendationImportByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ApiV1MiscFacebookRecommendationsImportResponse,
    Misc.MiscFacebookGetRecommendationImportByIdError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/misc/facebook/recommendations/import/{importId}"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "importId", value: request.importId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1MiscFacebookRecommendationsImportResponseSchema },
        errorFactory: Misc.MiscFacebookGetRecommendationImportByIdError,
      },
      options,
    );
  }

  /**
   * Get Facebook recommendations import status list
   *
   * @remarks
   * List Facebook recommendation import jobs for a team so you can monitor which imports are
   * queued, running, finished, or failed.
   *
   * @returns 200
   *
   * @throws {@link Misc.MiscFacebookGetRecommendationImportStatusError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  miscFacebookGetRecommendationImportStatus(
    request: Misc.MiscFacebookGetRecommendationImportStatusRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ApiV1MiscFacebookRecommendationsImportResponse1,
    Misc.MiscFacebookGetRecommendationImportStatusError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/misc/facebook/recommendations/import"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [{ name: "teamId", value: request.teamId, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1MiscFacebookRecommendationsImportResponse1Schema },
        errorFactory: Misc.MiscFacebookGetRecommendationImportStatusError,
      },
      options,
    );
  }

  /**
   * List imported Facebook recommendations
   *
   * @remarks
   * List the Facebook Page recommendations pulled in by an import, with paging and your remaining
   * import capacity. Use it to build a reputation-management inbox.
   *
   * @returns 200
   *
   * @throws {@link Misc.MiscFacebookGetRecommendationsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  miscFacebookGetRecommendations(
    request: Misc.MiscFacebookGetRecommendationsRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1MiscFacebookRecommendationsResponse, Misc.MiscFacebookGetRecommendationsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/misc/facebook/recommendations"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "teamId", value: request.teamId, schema: s.string() },
          { name: "limit", value: request.limit, schema: s.defaulted(s.float64(), 50) },
          { name: "offset", value: request.offset, schema: s.defaulted(s.nullable(s.float64()), 0) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1MiscFacebookRecommendationsResponseSchema },
        errorFactory: Misc.MiscFacebookGetRecommendationsError,
      },
      options,
    );
  }

  /**
   * List Facebook text background presets
   *
   * @remarks
   * Return the text background presets (colored statuses) that can be passed as
   * data.FACEBOOK.textFormatPresetId, grouped by whether each one renders as a flat color, a
   * gradient, or an illustration. Facebook exposes no endpoint of its own for this, so read the
   * list from here instead of hardcoding IDs. Any other numeric ID is also accepted and passed
   * straight through to Facebook.
   *
   * @returns 200
   *
   * @throws {@link Misc.MiscFacebookGetTextFormatPresetsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  miscFacebookGetTextFormatPresets(
    options?: RequestOptions,
  ): ApiPromise<ApiV1MiscFacebookTextFormatPresetsResponse, Misc.MiscFacebookGetTextFormatPresetsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/misc/facebook/text-format-presets"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1MiscFacebookTextFormatPresetsResponseSchema },
        errorFactory: Misc.MiscFacebookGetTextFormatPresetsError,
      },
      options,
    );
  }

  /**
   * Get Facebook token debug details
   *
   * @remarks
   * Inspect a connected Facebook account's access token, including its scopes and expiry. Use it to
   * diagnose permission errors when publishing fails.
   *
   * @returns 200
   *
   * @throws {@link Misc.MiscFacebookGetTokenDebugError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  miscFacebookGetTokenDebug(
    request: Misc.MiscFacebookGetTokenDebugRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1MiscFacebookTokenDebugResponse, Misc.MiscFacebookGetTokenDebugError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/misc/facebook/token-debug"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [{ name: "teamId", value: request.teamId, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1MiscFacebookTokenDebugResponseSchema },
        errorFactory: Misc.MiscFacebookGetTokenDebugError,
      },
      options,
    );
  }

  /**
   * Start a new Facebook recommendations import
   *
   * @remarks
   * Kick off an asynchronous import that pulls recommendations left on your Facebook Page into
   * bundle.social so you can read and reply to them through the API.
   *
   * @returns 201
   *
   * @throws {@link Misc.MiscFacebookImportRecommendationsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  miscFacebookImportRecommendations(
    request: Misc.MiscFacebookImportRecommendationsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV1MiscFacebookRecommendationsImportResponse, Misc.MiscFacebookImportRecommendationsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/misc/facebook/recommendations/import"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1MiscFacebookRecommendationsImportRequestInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: apiV1MiscFacebookRecommendationsImportResponseSchema },
        errorFactory: Misc.MiscFacebookImportRecommendationsError,
      },
      options,
    );
  }

  /**
   * Reply to a Facebook recommendation
   *
   * @remarks
   * Publish a Page reply to a Facebook recommendation. Use it to respond to reviews
   * programmatically instead of through Meta Business Suite.
   *
   * @returns 200
   *
   * @throws {@link Misc.MiscFacebookReplyToRecommendationError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  miscFacebookReplyToRecommendation(
    request: Misc.MiscFacebookReplyToRecommendationRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1MiscFacebookRecommendationsReplyResponse, Misc.MiscFacebookReplyToRecommendationError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/api/v1/misc/facebook/recommendations/{recommendationId}/reply"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "recommendationId", value: request.recommendationId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1MiscFacebookRecommendationsReplyRequestInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: apiV1MiscFacebookRecommendationsReplyResponseSchema },
        errorFactory: Misc.MiscFacebookReplyToRecommendationError,
      },
      options,
    );
  }

  /**
   * Reply to a Facebook recommendation thread comment
   *
   * @remarks
   * Publish a reply to a specific comment inside a Facebook recommendation thread.
   *
   * @returns 200
   *
   * @throws {@link Misc.MiscFacebookReplyToRecommendationCommentError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  miscFacebookReplyToRecommendationComment(
    request: Misc.MiscFacebookReplyToRecommendationCommentRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ApiV1MiscFacebookRecommendationsCommentsReplyResponse,
    Misc.MiscFacebookReplyToRecommendationCommentError
  > {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default(
          "/api/v1/misc/facebook/recommendations/{recommendationId}/comments/{commentId}/reply",
        ),
        auth: this.#auth.apiKeyAuth,
        pathParams: [
          { name: "recommendationId", value: request.recommendationId, schema: s.string() },
          { name: "commentId", value: request.commentId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(
            s.lazy(() => apiV1MiscFacebookRecommendationsCommentsReplyRequestInternalSchema),
          ),
        },
      },
      {
        success: { kind: "json", schema: apiV1MiscFacebookRecommendationsCommentsReplyResponseSchema },
        errorFactory: Misc.MiscFacebookReplyToRecommendationCommentError,
      },
      options,
    );
  }

  /**
   * Search Facebook Pages
   *
   * @remarks
   * Searches public Facebook Pages and returns IDs that can be inserted into Facebook Page mention
   * tokens.
   *
   * @returns 200
   *
   * @throws {@link Misc.MiscFacebookSearchPagesError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  miscFacebookSearchPages(
    request: Misc.MiscFacebookSearchPagesRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1MiscFacebookPagesResponse, Misc.MiscFacebookSearchPagesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/misc/facebook/pages"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "teamId", value: request.teamId, schema: s.string() },
          { name: "q", value: request.q, schema: s.string() },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 10) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1MiscFacebookPagesResponseSchema },
        errorFactory: Misc.MiscFacebookSearchPagesError,
      },
      options,
    );
  }

  /**
   * Add a media item (photo/video) using uploadId and category
   *
   * @remarks
   * Publish a photo or video to your Google Business Profile from a bundle.social upload, tagged
   * with a category such as exterior, interior, or product. Fresh photos are a local ranking and
   * conversion signal.
   *
   * @returns 200
   *
   * @throws {@link Misc.MiscGoogleBusinessAddMediaError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  miscGoogleBusinessAddMedia(
    request: Misc.MiscGoogleBusinessAddMediaRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV1MiscGoogleBusinessMediaResponse, Misc.MiscGoogleBusinessAddMediaError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/misc/google-business/media"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1MiscGoogleBusinessMediaRequestInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: apiV1MiscGoogleBusinessMediaResponseInternalSchema },
        errorFactory: Misc.MiscGoogleBusinessAddMediaError,
      },
      options,
    );
  }

  /**
   * Create Google Business place action link
   *
   * @remarks
   * Add an action link such as Book, Order online, or Reserve to your Google Business Profile so
   * customers can convert straight from the listing.
   *
   * @returns 200
   *
   * @throws {@link Misc.MiscGoogleBusinessCreatePlaceActionLinkError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  miscGoogleBusinessCreatePlaceActionLink(
    request: Misc.MiscGoogleBusinessCreatePlaceActionLinkRequest = {},
    options?: RequestOptions,
  ): ApiPromise<
    ApiV1MiscGoogleBusinessLocationPlaceActionLinksResponse1,
    Misc.MiscGoogleBusinessCreatePlaceActionLinkError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/misc/google-business/location/place-action-links"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(
            s.lazy(() => apiV1MiscGoogleBusinessLocationPlaceActionLinksRequestInternalSchema),
          ),
        },
      },
      {
        success: {
          kind: "json",
          schema: apiV1MiscGoogleBusinessLocationPlaceActionLinksResponse1InternalSchema,
        },
        errorFactory: Misc.MiscGoogleBusinessCreatePlaceActionLinkError,
      },
      options,
    );
  }

  /**
   * Delete Google Business media item
   *
   * @remarks
   * Remove a photo or video from your Google Business Profile.
   *
   * @returns 200
   *
   * @throws {@link Misc.MiscGoogleBusinessDeleteMediaError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  miscGoogleBusinessDeleteMedia(
    request: Misc.MiscGoogleBusinessDeleteMediaRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV1MiscGoogleBusinessMediaResponse2, Misc.MiscGoogleBusinessDeleteMediaError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v1/misc/google-business/media"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1MiscGoogleBusinessMediaRequest1Schema)),
        },
      },
      {
        success: { kind: "json", schema: apiV1MiscGoogleBusinessMediaResponse2Schema },
        errorFactory: Misc.MiscGoogleBusinessDeleteMediaError,
      },
      options,
    );
  }

  /**
   * Delete Google Business place action link
   *
   * @remarks
   * Remove an action link from your Google Business Profile, for example when a booking URL is
   * retired.
   *
   * @returns 200
   *
   * @throws {@link Misc.MiscGoogleBusinessDeletePlaceActionLinkError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  miscGoogleBusinessDeletePlaceActionLink(
    request: Misc.MiscGoogleBusinessDeletePlaceActionLinkRequest = {},
    options?: RequestOptions,
  ): ApiPromise<
    ApiV1MiscGoogleBusinessLocationPlaceActionLinksResponse3,
    Misc.MiscGoogleBusinessDeletePlaceActionLinkError
  > {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v1/misc/google-business/location/place-action-links"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1MiscGoogleBusinessLocationPlaceActionLinksRequest2Schema)),
        },
      },
      {
        success: { kind: "json", schema: apiV1MiscGoogleBusinessLocationPlaceActionLinksResponse3Schema },
        errorFactory: Misc.MiscGoogleBusinessDeletePlaceActionLinkError,
      },
      options,
    );
  }

  /**
   * Delete a Google Business post
   *
   * @remarks
   * Permanently delete a published Google Business post.
   *
   * @returns 200
   *
   * @throws {@link Misc.MiscGoogleBusinessDeletePostError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  miscGoogleBusinessDeletePost(
    request: Misc.MiscGoogleBusinessDeletePostRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV1MiscGoogleBusinessPostResponse, Misc.MiscGoogleBusinessDeletePostError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v1/misc/google-business/post"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1MiscGoogleBusinessPostRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: apiV1MiscGoogleBusinessPostResponseSchema },
        errorFactory: Misc.MiscGoogleBusinessDeletePostError,
      },
      options,
    );
  }

  /**
   * Delete the owner reply from a Google Review
   *
   * @remarks
   * Remove your owner reply from a Google Review, leaving the customer's review in place.
   *
   * @returns 200
   *
   * @throws {@link Misc.MiscGoogleBusinessDeleteReviewReplyError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  miscGoogleBusinessDeleteReviewReply(
    request: Misc.MiscGoogleBusinessDeleteReviewReplyRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1MiscGoogleBusinessReviewsReplyResponse, Misc.MiscGoogleBusinessDeleteReviewReplyError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v1/misc/google-business/reviews/{reviewId}/reply"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "reviewId", value: request.reviewId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1MiscGoogleBusinessReviewsReplyRequest1Schema)),
        },
      },
      {
        success: { kind: "json", schema: apiV1MiscGoogleBusinessReviewsReplyResponseSchema },
        errorFactory: Misc.MiscGoogleBusinessDeleteReviewReplyError,
      },
      options,
    );
  }

  /**
   * Get Google Business location attributes
   *
   * @remarks
   * Retrieve the attributes currently set on your Google Business Profile location, such as
   * accessibility, payment options, or amenities.
   *
   * @returns 200
   *
   * @throws {@link Misc.MiscGoogleBusinessGetAttributesError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  miscGoogleBusinessGetAttributes(
    request: Misc.MiscGoogleBusinessGetAttributesRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ApiV1MiscGoogleBusinessLocationAttributesResponse,
    Misc.MiscGoogleBusinessGetAttributesError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/misc/google-business/location/attributes"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [{ name: "teamId", value: request.teamId, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1MiscGoogleBusinessLocationAttributesResponseSchema },
        errorFactory: Misc.MiscGoogleBusinessGetAttributesError,
      },
      options,
    );
  }

  /**
   * Get Google Business food menus
   *
   * @remarks
   * Use typed query param `fields`. Supports both comma-separated values (`fields=name,menus`) and
   * repeated params (`fields=name&fields=menus`).
   *
   * @returns 200
   *
   * @throws {@link Misc.MiscGoogleBusinessGetFoodMenusError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  miscGoogleBusinessGetFoodMenus(
    request: Misc.MiscGoogleBusinessGetFoodMenusRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1MiscGoogleBusinessLocationFoodMenusResponse, Misc.MiscGoogleBusinessGetFoodMenusError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/misc/google-business/location/food-menus"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "teamId", value: request.teamId, schema: s.string() },
          {
            name: "fields",
            value: request.fields,
            schema: s.optionalNullable(s.array(s.lazy(() => field3Schema))),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1MiscGoogleBusinessLocationFoodMenusResponseSchema },
        errorFactory: Misc.MiscGoogleBusinessGetFoodMenusError,
      },
      options,
    );
  }

  /**
   * Get Google Business location profile
   *
   * @remarks
   * Use typed query param `fields`. Supports both comma-separated values (`fields=name,title`) and
   * repeated params (`fields=name&fields=title`).
   *
   * @returns 200
   *
   * @throws {@link Misc.MiscGoogleBusinessGetLocationError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  miscGoogleBusinessGetLocation(
    request: Misc.MiscGoogleBusinessGetLocationRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1MiscGoogleBusinessLocationResponse, Misc.MiscGoogleBusinessGetLocationError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/misc/google-business/location"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "teamId", value: request.teamId, schema: s.string() },
          {
            name: "fields",
            value: request.fields,
            schema: s.optionalNullable(s.array(s.lazy(() => fieldBundleSocialMiscApiSchema))),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1MiscGoogleBusinessLocationResponseSchema },
        errorFactory: Misc.MiscGoogleBusinessGetLocationError,
      },
      options,
    );
  }

  /**
   * Get a single imported Google Review
   *
   * @remarks
   * Retrieve one imported Google Review with its star rating, text, reviewer, and any existing
   * owner reply.
   *
   * @returns 200
   *
   * @throws {@link Misc.MiscGoogleBusinessGetReviewByIdError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  miscGoogleBusinessGetReviewById(
    request: Misc.MiscGoogleBusinessGetReviewByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1MiscGoogleBusinessReviewsResponse1, Misc.MiscGoogleBusinessGetReviewByIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/misc/google-business/reviews/{reviewId}"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "reviewId", value: request.reviewId, schema: s.string() }],
        query: [{ name: "teamId", value: request.teamId, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1MiscGoogleBusinessReviewsResponse1Schema },
        errorFactory: Misc.MiscGoogleBusinessGetReviewByIdError,
      },
      options,
    );
  }

  /**
   * Get review import by ID
   *
   * @remarks
   * Check the status, progress, and result of a single Google Reviews import job.
   *
   * @returns 200
   *
   * @throws {@link Misc.MiscGoogleBusinessGetReviewImportByIdError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  miscGoogleBusinessGetReviewImportById(
    request: Misc.MiscGoogleBusinessGetReviewImportByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ApiV1MiscGoogleBusinessReviewsImportResponse,
    Misc.MiscGoogleBusinessGetReviewImportByIdError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/misc/google-business/reviews/import/{importId}"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "importId", value: request.importId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1MiscGoogleBusinessReviewsImportResponseSchema },
        errorFactory: Misc.MiscGoogleBusinessGetReviewImportByIdError,
      },
      options,
    );
  }

  /**
   * Get review import status list
   *
   * @remarks
   * List Google Review import jobs for a team so you can monitor which imports are queued, running,
   * finished, or failed.
   *
   * @returns 200
   *
   * @throws {@link Misc.MiscGoogleBusinessGetReviewImportStatusError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  miscGoogleBusinessGetReviewImportStatus(
    request: Misc.MiscGoogleBusinessGetReviewImportStatusRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ApiV1MiscGoogleBusinessReviewsImportResponse1,
    Misc.MiscGoogleBusinessGetReviewImportStatusError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/misc/google-business/reviews/import"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [{ name: "teamId", value: request.teamId, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1MiscGoogleBusinessReviewsImportResponse1Schema },
        errorFactory: Misc.MiscGoogleBusinessGetReviewImportStatusError,
      },
      options,
    );
  }

  /**
   * List imported Google Reviews
   *
   * @remarks
   * List the Google Reviews pulled in by an import, with paging and your remaining import capacity.
   * Use it to build a review inbox or monitor rating trends.
   *
   * @returns 200
   *
   * @throws {@link Misc.MiscGoogleBusinessGetReviewsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  miscGoogleBusinessGetReviews(
    request: Misc.MiscGoogleBusinessGetReviewsRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1MiscGoogleBusinessReviewsResponse, Misc.MiscGoogleBusinessGetReviewsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/misc/google-business/reviews"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "teamId", value: request.teamId, schema: s.string() },
          { name: "limit", value: request.limit, schema: s.defaulted(s.float64(), 50) },
          { name: "offset", value: request.offset, schema: s.defaulted(s.nullable(s.float64()), 0) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1MiscGoogleBusinessReviewsResponseSchema },
        errorFactory: Misc.MiscGoogleBusinessGetReviewsError,
      },
      options,
    );
  }

  /**
   * Get Google Business service list
   *
   * @remarks
   * Retrieve the services listed on your Google Business Profile, including custom services and
   * prices.
   *
   * @returns 200
   *
   * @throws {@link Misc.MiscGoogleBusinessGetServiceListError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  miscGoogleBusinessGetServiceList(
    request: Misc.MiscGoogleBusinessGetServiceListRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ApiV1MiscGoogleBusinessLocationServiceListResponse,
    Misc.MiscGoogleBusinessGetServiceListError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/misc/google-business/location/service-list"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [{ name: "teamId", value: request.teamId, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1MiscGoogleBusinessLocationServiceListResponseSchema },
        errorFactory: Misc.MiscGoogleBusinessGetServiceListError,
      },
      options,
    );
  }

  /**
   * Start a new Google Reviews import
   *
   * @remarks
   * Kick off an asynchronous import that pulls your Google Business Profile reviews into
   * bundle.social so you can read and reply to them through the API.
   *
   * @returns 201
   *
   * @throws {@link Misc.MiscGoogleBusinessImportReviewsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  miscGoogleBusinessImportReviews(
    request: Misc.MiscGoogleBusinessImportReviewsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV1MiscGoogleBusinessReviewsImportResponse, Misc.MiscGoogleBusinessImportReviewsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/misc/google-business/reviews/import"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1MiscGoogleBusinessReviewsImportRequestInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: apiV1MiscGoogleBusinessReviewsImportResponseSchema },
        errorFactory: Misc.MiscGoogleBusinessImportReviewsError,
      },
      options,
    );
  }

  /**
   * List available Google Business attributes
   *
   * @remarks
   * List the attributes Google allows for your location's category and country. Check this before
   * updating attributes, since the valid set differs per business category.
   * `regionCode`/`languageCode` are honoured by looking the attributes up through the location's
   * primary category; when that category or a region code cannot be resolved (common for
   * service-area businesses with no storefront address) the location's own defaults are returned
   * instead and `lookup.by` comes back as `location`, meaning those two parameters were not
   * applied.
   *
   * @returns 200
   *
   * @throws {@link Misc.MiscGoogleBusinessListAvailableAttributesError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  miscGoogleBusinessListAvailableAttributes(
    request: Misc.MiscGoogleBusinessListAvailableAttributesRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ApiV1MiscGoogleBusinessLocationAttributesAvailableResponse,
    Misc.MiscGoogleBusinessListAvailableAttributesError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/misc/google-business/location/attributes/available"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "teamId", value: request.teamId, schema: s.string() },
          { name: "languageCode", value: request.languageCode, schema: s.optional(s.string()) },
          { name: "regionCode", value: request.regionCode, schema: s.optional(s.string()) },
          { name: "pageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "pageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1MiscGoogleBusinessLocationAttributesAvailableResponseSchema },
        errorFactory: Misc.MiscGoogleBusinessListAvailableAttributesError,
      },
      options,
    );
  }

  /**
   * List available Google Business categories
   *
   * @remarks
   * Requires `regionCode` and `languageCode`. Default `view=BASIC`. Optional `names` fetches exact
   * category IDs through `categories:batchGet`; otherwise `filter` supports `displayName` prefix
   * search.
   *
   * @returns 200
   *
   * @throws {@link Misc.MiscGoogleBusinessListCategoriesError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  miscGoogleBusinessListCategories(
    request: Misc.MiscGoogleBusinessListCategoriesRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ApiV1MiscGoogleBusinessLocationCategoriesAvailableResponse,
    Misc.MiscGoogleBusinessListCategoriesError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/misc/google-business/location/categories/available"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "teamId", value: request.teamId, schema: s.string() },
          { name: "regionCode", value: request.regionCode, schema: s.string() },
          { name: "languageCode", value: request.languageCode, schema: s.string() },
          { name: "names", value: request.names, schema: s.optional(s.array(s.string())) },
          { name: "filter", value: request.filter, schema: s.optional(s.string()) },
          { name: "pageSize", value: request.pageSize, schema: s.defaulted(s.int(), 50) },
          { name: "pageToken", value: request.pageToken, schema: s.optional(s.string()) },
          { name: "view", value: request.view, schema: s.defaulted(viewSchema, View.Basic) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1MiscGoogleBusinessLocationCategoriesAvailableResponseSchema },
        errorFactory: Misc.MiscGoogleBusinessListCategoriesError,
      },
      options,
    );
  }

  /**
   * List Google Business media items
   *
   * @remarks
   * List the photos and videos on your Google Business Profile, with paging. Use it to audit which
   * images are live before adding or removing media.
   *
   * @returns 200
   *
   * @throws {@link Misc.MiscGoogleBusinessListMediaError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  miscGoogleBusinessListMedia(
    request: Misc.MiscGoogleBusinessListMediaRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1MiscGoogleBusinessMediaResponse1, Misc.MiscGoogleBusinessListMediaError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/misc/google-business/media"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "teamId", value: request.teamId, schema: s.string() },
          { name: "pageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "pageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1MiscGoogleBusinessMediaResponse1InternalSchema },
        errorFactory: Misc.MiscGoogleBusinessListMediaError,
      },
      options,
    );
  }

  /**
   * List Google Business place action links
   *
   * @remarks
   * List the action links on your Google Business Profile, such as booking, ordering, or
   * reservation URLs.
   *
   * @returns 200
   *
   * @throws {@link Misc.MiscGoogleBusinessListPlaceActionLinksError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  miscGoogleBusinessListPlaceActionLinks(
    request: Misc.MiscGoogleBusinessListPlaceActionLinksRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ApiV1MiscGoogleBusinessLocationPlaceActionLinksResponse,
    Misc.MiscGoogleBusinessListPlaceActionLinksError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/misc/google-business/location/place-action-links"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "teamId", value: request.teamId, schema: s.string() },
          { name: "pageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "pageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: {
          kind: "json",
          schema: apiV1MiscGoogleBusinessLocationPlaceActionLinksResponseInternalSchema,
        },
        errorFactory: Misc.MiscGoogleBusinessListPlaceActionLinksError,
      },
      options,
    );
  }

  /**
   * List the search terms customers used to find the location
   *
   * @remarks
   * Monthly search keyword impressions for your selected location. `startMonth`/`endMonth` are
   * inclusive `YYYY-MM` values; counts are aggregated across the whole range, so request a single
   * month for a per-month figure. Each keyword returns either an exact `value` or a `threshold`,
   * meaning the real count is below that number: low-volume keywords are only ever reported as a
   * threshold, so treat a null `value` as suppressed rather than zero. Counts are unique users, not
   * raw impressions. Paginated with `pageToken`/`nextPageToken`, max `pageSize` 100.
   *
   * @returns 200
   *
   * @throws {@link Misc.MiscGoogleBusinessListSearchKeywordsError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  miscGoogleBusinessListSearchKeywords(
    request: Misc.MiscGoogleBusinessListSearchKeywordsRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ApiV1MiscGoogleBusinessLocationSearchKeywordsResponse,
    Misc.MiscGoogleBusinessListSearchKeywordsError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/misc/google-business/location/search-keywords"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "teamId", value: request.teamId, schema: s.string() },
          { name: "startMonth", value: request.startMonth, schema: s.string() },
          { name: "endMonth", value: request.endMonth, schema: s.string() },
          { name: "pageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "pageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: {
          kind: "json",
          schema: apiV1MiscGoogleBusinessLocationSearchKeywordsResponseInternalSchema,
        },
        errorFactory: Misc.MiscGoogleBusinessListSearchKeywordsError,
      },
      options,
    );
  }

  /**
   * Reply to a Google Review (creates or updates the owner reply)
   *
   * @remarks
   * Publish or update the owner reply on a Google Review. Google allows one owner reply per review,
   * so sending again overwrites the previous text.
   *
   * @returns 200
   *
   * @throws {@link Misc.MiscGoogleBusinessReplyToReviewError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  miscGoogleBusinessReplyToReview(
    request: Misc.MiscGoogleBusinessReplyToReviewRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1MiscGoogleBusinessReviewsReplyResponse, Misc.MiscGoogleBusinessReplyToReviewError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/api/v1/misc/google-business/reviews/{reviewId}/reply"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "reviewId", value: request.reviewId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1MiscGoogleBusinessReviewsReplyRequestInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: apiV1MiscGoogleBusinessReviewsReplyResponseSchema },
        errorFactory: Misc.MiscGoogleBusinessReplyToReviewError,
      },
      options,
    );
  }

  /**
   * Update Google Business location attributes
   *
   * @remarks
   * Set or change attributes on your Google Business Profile location. Complete attributes help
   * your listing surface for more specific local searches.
   *
   * @returns 200
   *
   * @throws {@link Misc.MiscGoogleBusinessUpdateAttributesError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  miscGoogleBusinessUpdateAttributes(
    request: Misc.MiscGoogleBusinessUpdateAttributesRequest = {},
    options?: RequestOptions,
  ): ApiPromise<
    ApiV1MiscGoogleBusinessLocationAttributesResponse,
    Misc.MiscGoogleBusinessUpdateAttributesError
  > {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/api/v1/misc/google-business/location/attributes"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1MiscGoogleBusinessLocationAttributesRequestInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: apiV1MiscGoogleBusinessLocationAttributesResponseSchema },
        errorFactory: Misc.MiscGoogleBusinessUpdateAttributesError,
      },
      options,
    );
  }

  /**
   * Update Google Business food menus
   *
   * @remarks
   * Body requires `fields` (`menus`).
   *
   * @returns 200
   *
   * @throws {@link Misc.MiscGoogleBusinessUpdateFoodMenusError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  miscGoogleBusinessUpdateFoodMenus(
    request: Misc.MiscGoogleBusinessUpdateFoodMenusRequest = {},
    options?: RequestOptions,
  ): ApiPromise<
    ApiV1MiscGoogleBusinessLocationFoodMenusResponse,
    Misc.MiscGoogleBusinessUpdateFoodMenusError
  > {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/api/v1/misc/google-business/location/food-menus"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1MiscGoogleBusinessLocationFoodMenusRequestInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: apiV1MiscGoogleBusinessLocationFoodMenusResponseSchema },
        errorFactory: Misc.MiscGoogleBusinessUpdateFoodMenusError,
      },
      options,
    );
  }

  /**
   * Update Google Business regular/special/more hours
   *
   * @remarks
   * Body requires `fields` (`regularHours`, `specialHours`, `moreHours`).
   *
   * @returns 200
   *
   * @throws {@link Misc.MiscGoogleBusinessUpdateHoursError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  miscGoogleBusinessUpdateHours(
    request: Misc.MiscGoogleBusinessUpdateHoursRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV1MiscGoogleBusinessLocationHoursResponse, Misc.MiscGoogleBusinessUpdateHoursError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/api/v1/misc/google-business/location/hours"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1MiscGoogleBusinessLocationHoursRequestInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: apiV1MiscGoogleBusinessLocationHoursResponseSchema },
        errorFactory: Misc.MiscGoogleBusinessUpdateHoursError,
      },
      options,
    );
  }

  /**
   * Update Google Business location profile fields
   *
   * @remarks
   * Field mask is derived automatically from provided fields.
   *
   * @returns 200
   *
   * @throws {@link Misc.MiscGoogleBusinessUpdateLocationError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  miscGoogleBusinessUpdateLocation(
    request: Misc.MiscGoogleBusinessUpdateLocationRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV1MiscGoogleBusinessLocationResponse, Misc.MiscGoogleBusinessUpdateLocationError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/api/v1/misc/google-business/location"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1MiscGoogleBusinessLocationRequestInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: apiV1MiscGoogleBusinessLocationResponseSchema },
        errorFactory: Misc.MiscGoogleBusinessUpdateLocationError,
      },
      options,
    );
  }

  /**
   * Update Google Business place action link
   *
   * @remarks
   * Body requires `fields` (`uri`, `placeActionType`, `isPreferred`).
   *
   * @returns 200
   *
   * @throws {@link Misc.MiscGoogleBusinessUpdatePlaceActionLinkError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  miscGoogleBusinessUpdatePlaceActionLink(
    request: Misc.MiscGoogleBusinessUpdatePlaceActionLinkRequest = {},
    options?: RequestOptions,
  ): ApiPromise<
    ApiV1MiscGoogleBusinessLocationPlaceActionLinksResponse1,
    Misc.MiscGoogleBusinessUpdatePlaceActionLinkError
  > {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/api/v1/misc/google-business/location/place-action-links"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(
            s.lazy(() => apiV1MiscGoogleBusinessLocationPlaceActionLinksRequest1InternalSchema),
          ),
        },
      },
      {
        success: {
          kind: "json",
          schema: apiV1MiscGoogleBusinessLocationPlaceActionLinksResponse1InternalSchema,
        },
        errorFactory: Misc.MiscGoogleBusinessUpdatePlaceActionLinkError,
      },
      options,
    );
  }

  /**
   * Update Google Business service list
   *
   * @remarks
   * Body requires `fields` (`serviceItems`).
   *
   * @returns 200
   *
   * @throws {@link Misc.MiscGoogleBusinessUpdateServiceListError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  miscGoogleBusinessUpdateServiceList(
    request: Misc.MiscGoogleBusinessUpdateServiceListRequest = {},
    options?: RequestOptions,
  ): ApiPromise<
    ApiV1MiscGoogleBusinessLocationServiceListResponse,
    Misc.MiscGoogleBusinessUpdateServiceListError
  > {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/api/v1/misc/google-business/location/service-list"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1MiscGoogleBusinessLocationServiceListRequestInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: apiV1MiscGoogleBusinessLocationServiceListResponseSchema },
        errorFactory: Misc.MiscGoogleBusinessUpdateServiceListError,
      },
      options,
    );
  }

  /**
   * Search for Instagram Business/Creator user by username
   *
   * @remarks
   * Checks if an Instagram user exists and returns their public profile data. Only works for
   * Business and Creator accounts and only when Instagram is connected via Facebook Login. Returns
   * followers_count, media_count, and profile picture if available.
   *
   * @returns 200
   *
   * @throws {@link Misc.MiscInstagramBusinessDiscoveryError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  miscInstagramBusinessDiscovery(
    request: Misc.MiscInstagramBusinessDiscoveryRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1MiscInstagramTagsResponse, Misc.MiscInstagramBusinessDiscoveryError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/misc/instagram/tags"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "teamId", value: request.teamId, schema: s.string() },
          { name: "username", value: request.username, schema: s.string() },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1MiscInstagramTagsResponseInternalSchema },
        errorFactory: Misc.MiscInstagramBusinessDiscoveryError,
      },
      options,
    );
  }

  /**
   * Delete an Instagram comment
   *
   * @remarks
   * Permanently delete a published Instagram comment.
   *
   * @returns 200
   *
   * @throws {@link Misc.MiscInstagramDeleteCommentError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  miscInstagramDeleteComment(
    request: Misc.MiscInstagramDeleteCommentRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV1MiscInstagramCommentResponse, Misc.MiscInstagramDeleteCommentError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v1/misc/instagram/comment"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1MiscInstagramCommentRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: apiV1MiscInstagramCommentResponseSchema },
        errorFactory: Misc.MiscInstagramDeleteCommentError,
      },
      options,
    );
  }

  /**
   * Search Instagram audio assets
   *
   * @remarks
   * Searches Instagram music or original sounds that can be attached to Reels. Only works for
   * Instagram accounts connected via Facebook Login.
   *
   * @returns 200
   *
   * @throws {@link Misc.MiscInstagramSearchAudioError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  miscInstagramSearchAudio(
    request: Misc.MiscInstagramSearchAudioRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1MiscInstagramAudioResponse, Misc.MiscInstagramSearchAudioError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/misc/instagram/audio"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "teamId", value: request.teamId, schema: s.string() },
          { name: "audioType", value: request.audioType, schema: audioTypeSchema },
          { name: "searchQuery", value: request.searchQuery, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1MiscInstagramAudioResponseSchema },
        errorFactory: Misc.MiscInstagramSearchAudioError,
      },
      options,
    );
  }

  /**
   * Search Instagram location IDs
   *
   * @remarks
   * Searches Facebook Pages with physical location data and returns IDs that can be used as
   * data.INSTAGRAM.locationId.
   *
   * @returns 200
   *
   * @throws {@link Misc.MiscInstagramSearchLocationsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  miscInstagramSearchLocations(
    request: Misc.MiscInstagramSearchLocationsRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1MiscInstagramLocationsResponse, Misc.MiscInstagramSearchLocationsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/misc/instagram/locations"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "teamId", value: request.teamId, schema: s.string() },
          { name: "q", value: request.q, schema: s.string() },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 10) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1MiscInstagramLocationsResponseSchema },
        errorFactory: Misc.MiscInstagramSearchLocationsError,
      },
      options,
    );
  }

  /**
   * Build Linkedin text, insert mentions at tag placeholders
   *
   * @remarks
   * If tag already exists (case insensitive), mentions replace it; otherwise they're appended to
   * the end.
   *
   * @returns 200
   *
   * @throws {@link Misc.MiscLinkedinBuildCommentaryError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  miscLinkedinBuildCommentary(
    request: Misc.MiscLinkedinBuildCommentaryRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV1MiscLinkedinMentionsBuilderResponse, Misc.MiscLinkedinBuildCommentaryError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/misc/linkedin/mentions/builder"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1MiscLinkedinMentionsBuilderRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: apiV1MiscLinkedinMentionsBuilderResponseSchema },
        errorFactory: Misc.MiscLinkedinBuildCommentaryError,
      },
      options,
    );
  }

  /**
   * Delete a LinkedIn comment
   *
   * @remarks
   * Permanently delete a published LinkedIn comment.
   *
   * @returns 200
   *
   * @throws {@link Misc.MiscLinkedinDeleteCommentError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  miscLinkedinDeleteComment(
    request: Misc.MiscLinkedinDeleteCommentRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV1MiscLinkedinCommentResponse1, Misc.MiscLinkedinDeleteCommentError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v1/misc/linkedin/comment"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1MiscLinkedinCommentRequest1Schema)),
        },
      },
      {
        success: { kind: "json", schema: apiV1MiscLinkedinCommentResponse1Schema },
        errorFactory: Misc.MiscLinkedinDeleteCommentError,
      },
      options,
    );
  }

  /**
   * Delete a LinkedIn post
   *
   * @remarks
   * Permanently delete a published LinkedIn post.
   *
   * @returns 200
   *
   * @throws {@link Misc.MiscLinkedinDeletePostError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  miscLinkedinDeletePost(
    request: Misc.MiscLinkedinDeletePostRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV1MiscLinkedinPostResponse1, Misc.MiscLinkedinDeletePostError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v1/misc/linkedin/post"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1MiscLinkedinPostRequest1Schema)),
        },
      },
      {
        success: { kind: "json", schema: apiV1MiscLinkedinPostResponse1Schema },
        errorFactory: Misc.MiscLinkedinDeletePostError,
      },
      options,
    );
  }

  /**
   * Edit an existing LinkedIn comment
   *
   * @remarks
   * Update the text content of a published LinkedIn comment.
   *
   * @returns 200
   *
   * @throws {@link Misc.MiscLinkedinEditCommentError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  miscLinkedinEditComment(
    request: Misc.MiscLinkedinEditCommentRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV1MiscLinkedinCommentResponse, Misc.MiscLinkedinEditCommentError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/api/v1/misc/linkedin/comment"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1MiscLinkedinCommentRequestInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: apiV1MiscLinkedinCommentResponseSchema },
        errorFactory: Misc.MiscLinkedinEditCommentError,
      },
      options,
    );
  }

  /**
   * Edit an existing LinkedIn post
   *
   * @remarks
   * Update the text content of a published LinkedIn post.
   *
   * @returns 200
   *
   * @throws {@link Misc.MiscLinkedinEditPostError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  miscLinkedinEditPost(
    request: Misc.MiscLinkedinEditPostRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV1MiscLinkedinPostResponse, Misc.MiscLinkedinEditPostError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/api/v1/misc/linkedin/post"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1MiscLinkedinPostRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: apiV1MiscLinkedinPostResponseSchema },
        errorFactory: Misc.MiscLinkedinEditPostError,
      },
      options,
    );
  }

  /**
   * Get Linkedin mentionable tags (people & organizations)
   *
   * @remarks
   * Search for LinkedIn people and organizations that can be \@-mentioned, and get the tag IDs
   * needed to insert them into post text. LinkedIn only renders a mention when the display text
   * matches the entity's name exactly (case sensitive), so a vanity slug never works. When a person
   * is resolved from `url` but LinkedIn does not expose their name, the tag comes back with an
   * empty `display` and `needsDisplayName: true` — pass `displayName` to set it. Note that a page
   * can only mention its own followers.
   *
   * @returns 200
   *
   * @throws {@link Misc.MiscLinkedinGetTagsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  miscLinkedinGetTags(
    request: Misc.MiscLinkedinGetTagsRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1MiscLinkedinMentionsTagsResponse, Misc.MiscLinkedinGetTagsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/misc/linkedin/mentions/tags"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "teamId", value: request.teamId, schema: s.string() },
          { name: "q", value: request.q, schema: s.optional(s.string()) },
          { name: "url", value: request.url, schema: s.optional(s.string()) },
          { name: "displayName", value: request.displayName, schema: s.optional(s.string()) },
          { name: "scope", value: request.scope, schema: s.defaulted(scopeSchema, Scope.All) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1MiscLinkedinMentionsTagsResponseInternalSchema },
        errorFactory: Misc.MiscLinkedinGetTagsError,
      },
      options,
    );
  }

  /**
   * Reshare an existing LinkedIn post
   *
   * @remarks
   * Create a LinkedIn reshare as the currently selected LinkedIn channel.
   *
   * @returns 200
   *
   * @throws {@link Misc.MiscLinkedinResharePostError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  miscLinkedinResharePost(
    request: Misc.MiscLinkedinResharePostRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV1MiscLinkedinPostReshareResponse, Misc.MiscLinkedinResharePostError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/misc/linkedin/post/reshare"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1MiscLinkedinPostReshareRequestInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: apiV1MiscLinkedinPostReshareResponseSchema },
        errorFactory: Misc.MiscLinkedinResharePostError,
      },
      options,
    );
  }

  /**
   * Delete a Mastodon comment
   *
   * @remarks
   * Permanently delete a published Mastodon reply/comment.
   *
   * @returns 200
   *
   * @throws {@link Misc.MiscMastodonDeleteCommentError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  miscMastodonDeleteComment(
    request: Misc.MiscMastodonDeleteCommentRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV1MiscMastodonCommentResponse1, Misc.MiscMastodonDeleteCommentError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v1/misc/mastodon/comment"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1MiscMastodonCommentRequest1Schema)),
        },
      },
      {
        success: { kind: "json", schema: apiV1MiscMastodonCommentResponse1Schema },
        errorFactory: Misc.MiscMastodonDeleteCommentError,
      },
      options,
    );
  }

  /**
   * Delete a Mastodon status
   *
   * @remarks
   * Permanently delete a published Mastodon status.
   *
   * @returns 200
   *
   * @throws {@link Misc.MiscMastodonDeleteStatusError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  miscMastodonDeleteStatus(
    request: Misc.MiscMastodonDeleteStatusRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV1MiscMastodonStatusResponse1, Misc.MiscMastodonDeleteStatusError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v1/misc/mastodon/status"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1MiscMastodonStatusRequest1Schema)),
        },
      },
      {
        success: { kind: "json", schema: apiV1MiscMastodonStatusResponse1Schema },
        errorFactory: Misc.MiscMastodonDeleteStatusError,
      },
      options,
    );
  }

  /**
   * Edit a Mastodon comment
   *
   * @remarks
   * Update the text content of a published Mastodon reply/comment.
   *
   * @returns 200
   *
   * @throws {@link Misc.MiscMastodonEditCommentError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  miscMastodonEditComment(
    request: Misc.MiscMastodonEditCommentRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV1MiscMastodonCommentResponse, Misc.MiscMastodonEditCommentError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/api/v1/misc/mastodon/comment"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1MiscMastodonCommentRequestInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: apiV1MiscMastodonCommentResponseSchema },
        errorFactory: Misc.MiscMastodonEditCommentError,
      },
      options,
    );
  }

  /**
   * Edit an existing Mastodon status
   *
   * @remarks
   * Update the text content and spoiler text of a published Mastodon status.
   *
   * @returns 200
   *
   * @throws {@link Misc.MiscMastodonEditStatusError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  miscMastodonEditStatus(
    request: Misc.MiscMastodonEditStatusRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV1MiscMastodonStatusResponse, Misc.MiscMastodonEditStatusError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/api/v1/misc/mastodon/status"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1MiscMastodonStatusRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: apiV1MiscMastodonStatusResponseSchema },
        errorFactory: Misc.MiscMastodonEditStatusError,
      },
      options,
    );
  }

  /**
   * Delete a Pinterest pin
   *
   * @remarks
   * Permanently delete a published Pinterest pin.
   *
   * @returns 200
   *
   * @throws {@link Misc.MiscPinterestDeletePinError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  miscPinterestDeletePin(
    request: Misc.MiscPinterestDeletePinRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV1MiscPinterestPinResponse1, Misc.MiscPinterestDeletePinError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v1/misc/pinterest/pin"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1MiscPinterestPinRequest1Schema)),
        },
      },
      {
        success: { kind: "json", schema: apiV1MiscPinterestPinResponse1Schema },
        errorFactory: Misc.MiscPinterestDeletePinError,
      },
      options,
    );
  }

  /**
   * [DISABLED] Edit an existing Pinterest pin
   *
   * @remarks
   * Temporarily disabled
   *
   * @returns 200
   *
   * @throws {@link Misc.MiscPinterestEditPinError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  miscPinterestEditPin(
    request: Misc.MiscPinterestEditPinRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV1MiscPinterestPinResponse, Misc.MiscPinterestEditPinError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/api/v1/misc/pinterest/pin"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1MiscPinterestPinRequestInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: apiV1MiscPinterestPinResponseSchema },
        errorFactory: Misc.MiscPinterestEditPinError,
      },
      options,
    );
  }

  /**
   * Delete a Reddit comment
   *
   * @remarks
   * Permanently delete a published Reddit comment.
   *
   * @returns 200
   *
   * @throws {@link Misc.MiscRedditDeleteCommentError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  miscRedditDeleteComment(
    request: Misc.MiscRedditDeleteCommentRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV1MiscRedditCommentResponse1, Misc.MiscRedditDeleteCommentError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v1/misc/reddit/comment"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1MiscRedditCommentRequest1Schema)),
        },
      },
      {
        success: { kind: "json", schema: apiV1MiscRedditCommentResponse1Schema },
        errorFactory: Misc.MiscRedditDeleteCommentError,
      },
      options,
    );
  }

  /**
   * Delete a Reddit post
   *
   * @remarks
   * Permanently delete a published Reddit post.
   *
   * @returns 200
   *
   * @throws {@link Misc.MiscRedditDeletePostError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  miscRedditDeletePost(
    request: Misc.MiscRedditDeletePostRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV1MiscRedditPostResponse1, Misc.MiscRedditDeletePostError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v1/misc/reddit/post"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1MiscRedditPostRequest1Schema)),
        },
      },
      {
        success: { kind: "json", schema: apiV1MiscRedditPostResponse1Schema },
        errorFactory: Misc.MiscRedditDeletePostError,
      },
      options,
    );
  }

  /**
   * Edit an existing Reddit comment
   *
   * @remarks
   * Update the text content of a published Reddit comment.
   *
   * @returns 200
   *
   * @throws {@link Misc.MiscRedditEditCommentError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  miscRedditEditComment(
    request: Misc.MiscRedditEditCommentRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV1MiscRedditCommentResponse, Misc.MiscRedditEditCommentError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/api/v1/misc/reddit/comment"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1MiscRedditCommentRequestInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: apiV1MiscRedditCommentResponseSchema },
        errorFactory: Misc.MiscRedditEditCommentError,
      },
      options,
    );
  }

  /**
   * Edit an existing Reddit post
   *
   * @remarks
   * Update the selftext content of a published Reddit text post. Link and media posts cannot be
   * edited.
   *
   * @returns 200
   *
   * @throws {@link Misc.MiscRedditEditPostError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  miscRedditEditPost(
    request: Misc.MiscRedditEditPostRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV1MiscRedditPostResponse, Misc.MiscRedditEditPostError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/api/v1/misc/reddit/post"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1MiscRedditPostRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: apiV1MiscRedditPostResponseSchema },
        errorFactory: Misc.MiscRedditEditPostError,
      },
      options,
    );
  }

  /**
   * Get subreddit post requirements (flair required/enabled)
   *
   * @remarks
   * Check a subreddit's posting rules before publishing, including whether flair is enabled or
   * mandatory. Call this first to avoid rejected submissions.
   *
   * @returns 200
   *
   * @throws {@link Misc.MiscRedditGetPostRequirementsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  miscRedditGetPostRequirements(
    request: Misc.MiscRedditGetPostRequirementsRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1MiscRedditPostRequirementsResponse, Misc.MiscRedditGetPostRequirementsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/misc/reddit/post-requirements"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "teamId", value: request.teamId, schema: s.string() },
          { name: "subreddit", value: request.subreddit, schema: s.string() },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1MiscRedditPostRequirementsResponseSchema },
        errorFactory: Misc.MiscRedditGetPostRequirementsError,
      },
      options,
    );
  }

  /**
   * Get subreddit flairs list
   *
   * @remarks
   * List the flairs available in a subreddit so you can attach a valid flair ID when creating a
   * Reddit post.
   *
   * @returns 200
   *
   * @throws {@link Misc.MiscRedditGetSubredditFlairsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  miscRedditGetSubredditFlairs(
    request: Misc.MiscRedditGetSubredditFlairsRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1MiscRedditSubredditFlairsResponse[], Misc.MiscRedditGetSubredditFlairsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/misc/reddit/subreddit-flairs"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "teamId", value: request.teamId, schema: s.string() },
          { name: "subreddit", value: request.subreddit, schema: s.string() },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: {
          kind: "json",
          schema: s.array(s.lazy(() => apiV1MiscRedditSubredditFlairsResponseSchema)),
        },
        errorFactory: Misc.MiscRedditGetSubredditFlairsError,
      },
      options,
    );
  }

  /**
   * Delete a Slack message
   *
   * @remarks
   * Permanently delete a published Slack message.
   *
   * @returns 200
   *
   * @throws {@link Misc.MiscSlackDeleteMessageError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  miscSlackDeleteMessage(
    request: Misc.MiscSlackDeleteMessageRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV1MiscSlackMessageResponse1, Misc.MiscSlackDeleteMessageError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v1/misc/slack/message"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1MiscSlackMessageRequest1Schema)),
        },
      },
      {
        success: { kind: "json", schema: apiV1MiscSlackMessageResponse1Schema },
        errorFactory: Misc.MiscSlackDeleteMessageError,
      },
      options,
    );
  }

  /**
   * Edit an existing Slack message
   *
   * @remarks
   * Update the text content of a published Slack message.
   *
   * @returns 200
   *
   * @throws {@link Misc.MiscSlackEditMessageError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  miscSlackEditMessage(
    request: Misc.MiscSlackEditMessageRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV1MiscSlackMessageResponse, Misc.MiscSlackEditMessageError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/api/v1/misc/slack/message"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1MiscSlackMessageRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: apiV1MiscSlackMessageResponseSchema },
        errorFactory: Misc.MiscSlackEditMessageError,
      },
      options,
    );
  }

  /**
   * Delete a TikTok comment
   *
   * @remarks
   * Delete a published TikTok comment.
   *
   * @returns 200
   *
   * @throws {@link Misc.MiscTiktokDeleteCommentError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  miscTiktokDeleteComment(
    request: Misc.MiscTiktokDeleteCommentRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV1MiscTiktokCommentResponse, Misc.MiscTiktokDeleteCommentError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v1/misc/tiktok/comment"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1MiscTiktokCommentRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: apiV1MiscTiktokCommentResponseSchema },
        errorFactory: Misc.MiscTiktokDeleteCommentError,
      },
      options,
    );
  }

  /**
   * Get popular tracks from TikTok Commercial Music Library
   *
   * @remarks
   * Retrieve up to 100 popular tracks pre-cleared for organic content and ad creation from TikTok
   * CML.
   *
   * @returns List of trending tracks.
   *
   * @throws {@link Misc.MiscTiktokGetCommercialMusicTrendingListError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  miscTiktokGetCommercialMusicTrendingList(
    request: Misc.MiscTiktokGetCommercialMusicTrendingListRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ApiV1MiscTiktokCmlTrendingListResponse[],
    Misc.MiscTiktokGetCommercialMusicTrendingListError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/misc/tiktok/cml/trending-list"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "teamId", value: request.teamId, schema: s.string() },
          { name: "genre", value: request.genre, schema: s.defaulted(genreSchema, Genre.Pop) },
          {
            name: "dateRange",
            value: request.dateRange,
            schema: s.defaulted(dateRangeSchema, DateRange._7Day),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: {
          kind: "json",
          schema: s.array(s.lazy(() => apiV1MiscTiktokCmlTrendingListResponseInternalSchema)),
        },
        errorFactory: Misc.MiscTiktokGetCommercialMusicTrendingListError,
      },
      options,
    );
  }

  /**
   * Get the posting options of a TikTok account
   *
   * @remarks
   * Returns the privacy levels, interaction settings (comments, duet, stitch) and maximum video
   * duration the connected TikTok account allows, read live from TikTok. A value the account does
   * not allow is not rejected when you create the post, it fails at publish time with TT:40002. Use
   * it to build the options of your own composer, not as a check before every publish: each call
   * counts against the account's TikTok rate limit.
   *
   * @returns 200
   *
   * @throws {@link Misc.MiscTiktokGetPostSettingsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  miscTiktokGetPostSettings(
    request: Misc.MiscTiktokGetPostSettingsRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1MiscTiktokPostSettingsResponse, Misc.MiscTiktokGetPostSettingsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/misc/tiktok/post-settings"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [{ name: "teamId", value: request.teamId, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1MiscTiktokPostSettingsResponseSchema },
        errorFactory: Misc.MiscTiktokGetPostSettingsError,
      },
      options,
    );
  }

  /**
   * Search TikTok location tags
   *
   * @remarks
   * Searches location tags available to the connected TikTok account (up to 20 results). Pass
   * `locationId` and `name` as data.TIKTOK.locationId and data.TIKTOK.locationName to show the
   * location on a video or photo post.
   *
   * @returns 200
   *
   * @throws {@link Misc.MiscTiktokSearchLocationsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  miscTiktokSearchLocations(
    request: Misc.MiscTiktokSearchLocationsRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1MiscTiktokLocationsResponse, Misc.MiscTiktokSearchLocationsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/misc/tiktok/locations"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "teamId", value: request.teamId, schema: s.string() },
          { name: "q", value: request.q, schema: s.string() },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1MiscTiktokLocationsResponseSchema },
        errorFactory: Misc.MiscTiktokSearchLocationsError,
      },
      options,
    );
  }

  /**
   * Delete a Twitter/X comment
   *
   * @remarks
   * Permanently delete a published Twitter/X reply/comment. X charges for deletes ($0.01 per
   * request).
   *
   * @returns 200
   *
   * @throws {@link Misc.MiscTwitterDeleteCommentError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  miscTwitterDeleteComment(
    request: Misc.MiscTwitterDeleteCommentRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV1MiscTwitterCommentResponse, Misc.MiscTwitterDeleteCommentError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v1/misc/twitter/comment"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1MiscTwitterCommentRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: apiV1MiscTwitterCommentResponseSchema },
        errorFactory: Misc.MiscTwitterDeleteCommentError,
      },
      options,
    );
  }

  /**
   * Delete a Twitter/X tweet
   *
   * @remarks
   * Permanently delete a published Twitter/X tweet. X charges for deletes ($0.01 per request).
   *
   * @returns 200
   *
   * @throws {@link Misc.MiscTwitterDeleteTweetError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  miscTwitterDeleteTweet(
    request: Misc.MiscTwitterDeleteTweetRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV1MiscTwitterTweetResponse, Misc.MiscTwitterDeleteTweetError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v1/misc/twitter/tweet"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1MiscTwitterTweetRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: apiV1MiscTwitterTweetResponseSchema },
        errorFactory: Misc.MiscTwitterDeleteTweetError,
      },
      options,
    );
  }

  /**
   * Repost a Twitter/X post
   *
   * @remarks
   * Repost (retweet) any X post from the connected account. X charges for reposts ($0.015 per
   * request); your credits are charged once per post, per connected account, per UTC day, so
   * reposting the same post again on the same day costs no extra credit. Reposting a post that is
   * already reposted is a no-op on X's side.
   *
   * @returns 200
   *
   * @throws {@link Misc.MiscTwitterRetweetError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  miscTwitterRetweet(
    request: Misc.MiscTwitterRetweetRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV1MiscTwitterRetweetResponse, Misc.MiscTwitterRetweetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/misc/twitter/retweet"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1MiscTwitterRetweetRequestInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: apiV1MiscTwitterRetweetResponseSchema },
        errorFactory: Misc.MiscTwitterRetweetError,
      },
      options,
    );
  }

  /**
   * Undo a Twitter/X repost
   *
   * @remarks
   * Remove a repost (retweet) made by the connected account. X charges for this too ($0.01 per
   * request); your credits are charged once per post, per connected account, per UTC day, the same
   * way reposting is.
   *
   * @returns 200
   *
   * @throws {@link Misc.MiscTwitterUnretweetError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  miscTwitterUnretweet(
    request: Misc.MiscTwitterUnretweetRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV1MiscTwitterRetweetResponse, Misc.MiscTwitterUnretweetError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v1/misc/twitter/retweet"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1MiscTwitterRetweetRequestInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: apiV1MiscTwitterRetweetResponseSchema },
        errorFactory: Misc.MiscTwitterUnretweetError,
      },
      options,
    );
  }

  /**
   * Add a video to a playlist
   *
   * @remarks
   * Append a video to a YouTube playlist on a connected channel.
   *
   * @returns 200
   *
   * @throws {@link Misc.MiscYoutubeAddVideoToPlaylistError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  miscYoutubeAddVideoToPlaylist(
    request: Misc.MiscYoutubeAddVideoToPlaylistRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV1MiscYoutubePlaylistItemsResponse, Misc.MiscYoutubeAddVideoToPlaylistError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/misc/youtube/playlist-items"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1MiscYoutubePlaylistItemsRequestInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: apiV1MiscYoutubePlaylistItemsResponseInternalSchema },
        errorFactory: Misc.MiscYoutubeAddVideoToPlaylistError,
      },
      options,
    );
  }

  /**
   * Create a new playlist
   *
   * @remarks
   * Create a playlist on a connected YouTube channel with a title, description, and privacy status.
   * Playlists group related videos and increase session watch time.
   *
   * @returns 200
   *
   * @throws {@link Misc.MiscYoutubeCreateNewChannelPlaylistError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  miscYoutubeCreateNewChannelPlaylist(
    request: Misc.MiscYoutubeCreateNewChannelPlaylistRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV1MiscYoutubePlaylistResponse1, Misc.MiscYoutubeCreateNewChannelPlaylistError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/misc/youtube/playlist"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1MiscYoutubePlaylistRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: apiV1MiscYoutubePlaylistResponse1InternalSchema },
        errorFactory: Misc.MiscYoutubeCreateNewChannelPlaylistError,
      },
      options,
    );
  }

  /**
   * Delete a channel playlist
   *
   * @remarks
   * Permanently delete a playlist from a connected YouTube channel. The videos themselves are not
   * deleted.
   *
   * @returns 200
   *
   * @throws {@link Misc.MiscYoutubeDeleteChannelPlaylistError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  miscYoutubeDeleteChannelPlaylist(
    request: Misc.MiscYoutubeDeleteChannelPlaylistRequest,
    options?: RequestOptions,
  ): ApiPromise<boolean, Misc.MiscYoutubeDeleteChannelPlaylistError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v1/misc/youtube/playlist/{playlistId}"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "playlistId", value: request.playlistId, schema: s.string() }],
        query: [{ name: "teamId", value: request.teamId, schema: s.string() }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.boolean() },
        errorFactory: Misc.MiscYoutubeDeleteChannelPlaylistError,
      },
      options,
    );
  }

  /**
   * Delete a YouTube comment
   *
   * @remarks
   * Permanently delete a published YouTube comment.
   *
   * @returns 200
   *
   * @throws {@link Misc.MiscYoutubeDeleteCommentError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  miscYoutubeDeleteComment(
    request: Misc.MiscYoutubeDeleteCommentRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV1MiscYoutubeCommentResponse1, Misc.MiscYoutubeDeleteCommentError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v1/misc/youtube/comment"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1MiscYoutubeCommentRequest1Schema)),
        },
      },
      {
        success: { kind: "json", schema: apiV1MiscYoutubeCommentResponse1Schema },
        errorFactory: Misc.MiscYoutubeDeleteCommentError,
      },
      options,
    );
  }

  /**
   * Delete a YouTube video
   *
   * @remarks
   * Permanently delete a published YouTube video.
   *
   * @returns 200
   *
   * @throws {@link Misc.MiscYoutubeDeleteVideoError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  miscYoutubeDeleteVideo(
    request: Misc.MiscYoutubeDeleteVideoRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV1MiscYoutubeVideoResponse1, Misc.MiscYoutubeDeleteVideoError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v1/misc/youtube/video"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1MiscYoutubeVideoRequest1Schema)),
        },
      },
      {
        success: { kind: "json", schema: apiV1MiscYoutubeVideoResponse1Schema },
        errorFactory: Misc.MiscYoutubeDeleteVideoError,
      },
      options,
    );
  }

  /**
   * Remove a video from a playlist
   *
   * @remarks
   * Remove a single video from a YouTube playlist. Pass the playlist item ID, not the video ID. The
   * video itself stays on the channel.
   *
   * @returns 200
   *
   * @throws {@link Misc.MiscYoutubeDeleteVideoFromPlaylistError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  miscYoutubeDeleteVideoFromPlaylist(
    request: Misc.MiscYoutubeDeleteVideoFromPlaylistRequest,
    options?: RequestOptions,
  ): ApiPromise<boolean, Misc.MiscYoutubeDeleteVideoFromPlaylistError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v1/misc/youtube/playlist-items/{playlistItemId}"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "playlistItemId", value: request.playlistItemId, schema: s.string() }],
        query: [{ name: "teamId", value: request.teamId, schema: s.string() }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.boolean() },
        errorFactory: Misc.MiscYoutubeDeleteVideoFromPlaylistError,
      },
      options,
    );
  }

  /**
   * Edit YouTube comment
   *
   * @remarks
   * Update the text content of a published YouTube comment.
   *
   * @returns 200
   *
   * @throws {@link Misc.MiscYoutubeEditCommentError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  miscYoutubeEditComment(
    request: Misc.MiscYoutubeEditCommentRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV1MiscYoutubeCommentResponse, Misc.MiscYoutubeEditCommentError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/api/v1/misc/youtube/comment"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1MiscYoutubeCommentRequestInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: apiV1MiscYoutubeCommentResponseSchema },
        errorFactory: Misc.MiscYoutubeEditCommentError,
      },
      options,
    );
  }

  /**
   * Edit YouTube video metadata
   *
   * @remarks
   * Update the title, description, tags, category, or privacy status of a published YouTube video.
   *
   * @returns 200
   *
   * @throws {@link Misc.MiscYoutubeEditVideoError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  miscYoutubeEditVideo(
    request: Misc.MiscYoutubeEditVideoRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV1MiscYoutubeVideoResponse, Misc.MiscYoutubeEditVideoError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/api/v1/misc/youtube/video"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1MiscYoutubeVideoRequestInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: apiV1MiscYoutubeVideoResponseSchema },
        errorFactory: Misc.MiscYoutubeEditVideoError,
      },
      options,
    );
  }

  /**
   * Get channel playlists
   *
   * @remarks
   * List the playlists on a connected YouTube channel, with their IDs, titles, and privacy status.
   *
   * @returns 200
   *
   * @throws {@link Misc.MiscYoutubeGetChannelPlaylistError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  miscYoutubeGetChannelPlaylist(
    request: Misc.MiscYoutubeGetChannelPlaylistRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1MiscYoutubePlaylistResponse, Misc.MiscYoutubeGetChannelPlaylistError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/misc/youtube/playlist"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "teamId", value: request.teamId, schema: s.string() },
          { name: "maxResults", value: request.maxResults, schema: s.defaulted(s.int(), 10) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1MiscYoutubePlaylistResponseInternalSchema },
        errorFactory: Misc.MiscYoutubeGetChannelPlaylistError,
      },
      options,
    );
  }

  /**
   * Get YouTube regions
   *
   * @remarks
   * Retrieve the list of content regions that the YouTube website supports.
   *
   * @returns 200
   *
   * @throws {@link Misc.MiscYoutubeGetRegionsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  miscYoutubeGetRegions(
    request: Misc.MiscYoutubeGetRegionsRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1MiscYoutubeRegionsResponse, Misc.MiscYoutubeGetRegionsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/misc/youtube/regions"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [{ name: "teamId", value: request.teamId, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1MiscYoutubeRegionsResponseSchema },
        errorFactory: Misc.MiscYoutubeGetRegionsError,
      },
      options,
    );
  }

  /**
   * Get YouTube video categories
   *
   * @remarks
   * Retrieve the list of video categories that can be associated with YouTube videos for a specific
   * region.
   *
   * @returns 200
   *
   * @throws {@link Misc.MiscYoutubeGetVideoCategoriesError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  miscYoutubeGetVideoCategories(
    request: Misc.MiscYoutubeGetVideoCategoriesRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1MiscYoutubeVideoCategoriesResponse, Misc.MiscYoutubeGetVideoCategoriesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/misc/youtube/video-categories"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "teamId", value: request.teamId, schema: s.string() },
          { name: "regionCode", value: request.regionCode, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1MiscYoutubeVideoCategoriesResponseSchema },
        errorFactory: Misc.MiscYoutubeGetVideoCategoriesError,
      },
      options,
    );
  }

  /**
   * Get videos from a playlist
   *
   * @remarks
   * List the videos in a YouTube playlist, including the playlist item IDs required to remove
   * individual entries.
   *
   * @returns 200
   *
   * @throws {@link Misc.MiscYoutubeGetVideosFromPlaylistError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  miscYoutubeGetVideosFromPlaylist(
    request: Misc.MiscYoutubeGetVideosFromPlaylistRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1MiscYoutubePlaylistItemsResponse1, Misc.MiscYoutubeGetVideosFromPlaylistError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/misc/youtube/playlist-items"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "teamId", value: request.teamId, schema: s.string() },
          { name: "playlistId", value: request.playlistId, schema: s.string() },
          { name: "maxResults", value: request.maxResults, schema: s.defaulted(s.int(), 10) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1MiscYoutubePlaylistItemsResponse1InternalSchema },
        errorFactory: Misc.MiscYoutubeGetVideosFromPlaylistError,
      },
      options,
    );
  }

  /**
   * Set or change thumbnail for a YouTube video
   *
   * @remarks
   * Upload a custom thumbnail for a published YouTube video. Custom thumbnails require a verified
   * channel and strongly influence click-through rate.
   *
   * @returns 200
   *
   * @throws {@link Misc.MiscYoutubeSetThumbnailError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  miscYoutubeSetThumbnail(
    request: Misc.MiscYoutubeSetThumbnailRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV1MiscYoutubeThumbnailResponse, Misc.MiscYoutubeSetThumbnailError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/misc/youtube/thumbnail"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1MiscYoutubeThumbnailRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: apiV1MiscYoutubeThumbnailResponseInternalSchema },
        errorFactory: Misc.MiscYoutubeSetThumbnailError,
      },
      options,
    );
  }

  /**
   * Update an existing playlist
   *
   * @remarks
   * Change the title, description, or privacy status of a YouTube playlist on a connected channel.
   * Send the playlist ID together with the fields you want to update.
   *
   * @returns 200
   *
   * @throws {@link Misc.MiscYoutubeUpdateChannelPlaylistError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  miscYoutubeUpdateChannelPlaylist(
    request: Misc.MiscYoutubeUpdateChannelPlaylistRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV1MiscYoutubePlaylistResponse1, Misc.MiscYoutubeUpdateChannelPlaylistError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/api/v1/misc/youtube/playlist"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1MiscYoutubePlaylistRequest1Schema)),
        },
      },
      {
        success: { kind: "json", schema: apiV1MiscYoutubePlaylistResponse1InternalSchema },
        errorFactory: Misc.MiscYoutubeUpdateChannelPlaylistError,
      },
      options,
    );
  }
}

export namespace Misc {
  export type MiscBlueskyDeleteCommentRequest = {
    /** Body */
    body?: ApiV1MiscBlueskyCommentRequest;
  };

  export class MiscBlueskyDeleteCommentError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1MiscBlueskyComment400Error1", ApiV1MiscBlueskyComment400Error1>
      | Declared<"apiV1MiscBlueskyComment401Error1", ApiV1MiscBlueskyComment401Error1>
      | Declared<"apiV1MiscBlueskyComment403Error1", ApiV1MiscBlueskyComment403Error1>
      | Declared<"apiV1MiscBlueskyComment404Error1", ApiV1MiscBlueskyComment404Error1>
      | Declared<"apiV1MiscBlueskyComment429Error1", ApiV1MiscBlueskyComment429Error1>
      | Declared<"apiV1MiscBlueskyComment500Error1", ApiV1MiscBlueskyComment500Error1>
      | Declared<"apiV1MiscBlueskyComment502Error1", ApiV1MiscBlueskyComment502Error1>
      | Declared<"apiV1MiscBlueskyComment503Error1", ApiV1MiscBlueskyComment503Error1>
      | Declared<"apiV1MiscBlueskyComment504Error1", ApiV1MiscBlueskyComment504Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<MiscBlueskyDeleteCommentError> = [
      {
        on: 400,
        kind: "apiV1MiscBlueskyComment400Error1",
        decode: { kind: "json", schema: apiV1MiscBlueskyComment400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1MiscBlueskyComment401Error1",
        decode: { kind: "json", schema: apiV1MiscBlueskyComment401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1MiscBlueskyComment403Error1",
        decode: { kind: "json", schema: apiV1MiscBlueskyComment403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1MiscBlueskyComment404Error1",
        decode: { kind: "json", schema: apiV1MiscBlueskyComment404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1MiscBlueskyComment429Error1",
        decode: { kind: "json", schema: apiV1MiscBlueskyComment429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1MiscBlueskyComment500Error1",
        decode: { kind: "json", schema: apiV1MiscBlueskyComment500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1MiscBlueskyComment502Error1",
        decode: { kind: "json", schema: apiV1MiscBlueskyComment502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1MiscBlueskyComment503Error1",
        decode: { kind: "json", schema: apiV1MiscBlueskyComment503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1MiscBlueskyComment504Error1",
        decode: { kind: "json", schema: apiV1MiscBlueskyComment504Error1Schema },
      },
    ];
  }

  export type MiscBlueskyDeletePostRequest = {
    /** Body */
    body?: ApiV1MiscBlueskyPostRequest;
  };

  export class MiscBlueskyDeletePostError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1MiscBlueskyPost400Error1", ApiV1MiscBlueskyPost400Error1>
      | Declared<"apiV1MiscBlueskyPost401Error1", ApiV1MiscBlueskyPost401Error1>
      | Declared<"apiV1MiscBlueskyPost403Error1", ApiV1MiscBlueskyPost403Error1>
      | Declared<"apiV1MiscBlueskyPost404Error1", ApiV1MiscBlueskyPost404Error1>
      | Declared<"apiV1MiscBlueskyPost429Error1", ApiV1MiscBlueskyPost429Error1>
      | Declared<"apiV1MiscBlueskyPost500Error1", ApiV1MiscBlueskyPost500Error1>
      | Declared<"apiV1MiscBlueskyPost502Error1", ApiV1MiscBlueskyPost502Error1>
      | Declared<"apiV1MiscBlueskyPost503Error1", ApiV1MiscBlueskyPost503Error1>
      | Declared<"apiV1MiscBlueskyPost504Error1", ApiV1MiscBlueskyPost504Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<MiscBlueskyDeletePostError> = [
      {
        on: 400,
        kind: "apiV1MiscBlueskyPost400Error1",
        decode: { kind: "json", schema: apiV1MiscBlueskyPost400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1MiscBlueskyPost401Error1",
        decode: { kind: "json", schema: apiV1MiscBlueskyPost401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1MiscBlueskyPost403Error1",
        decode: { kind: "json", schema: apiV1MiscBlueskyPost403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1MiscBlueskyPost404Error1",
        decode: { kind: "json", schema: apiV1MiscBlueskyPost404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1MiscBlueskyPost429Error1",
        decode: { kind: "json", schema: apiV1MiscBlueskyPost429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1MiscBlueskyPost500Error1",
        decode: { kind: "json", schema: apiV1MiscBlueskyPost500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1MiscBlueskyPost502Error1",
        decode: { kind: "json", schema: apiV1MiscBlueskyPost502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1MiscBlueskyPost503Error1",
        decode: { kind: "json", schema: apiV1MiscBlueskyPost503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1MiscBlueskyPost504Error1",
        decode: { kind: "json", schema: apiV1MiscBlueskyPost504Error1Schema },
      },
    ];
  }

  export type MiscDiscordDeleteMessageRequest = {
    /** Body */
    body?: ApiV1MiscDiscordMessageRequest;
  };

  export class MiscDiscordDeleteMessageError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1MiscDiscordMessage400Error1", ApiV1MiscDiscordMessage400Error1>
      | Declared<"apiV1MiscDiscordMessage401Error1", ApiV1MiscDiscordMessage401Error1>
      | Declared<"apiV1MiscDiscordMessage403Error1", ApiV1MiscDiscordMessage403Error1>
      | Declared<"apiV1MiscDiscordMessage404Error1", ApiV1MiscDiscordMessage404Error1>
      | Declared<"apiV1MiscDiscordMessage429Error1", ApiV1MiscDiscordMessage429Error1>
      | Declared<"apiV1MiscDiscordMessage500Error1", ApiV1MiscDiscordMessage500Error1>
      | Declared<"apiV1MiscDiscordMessage502Error1", ApiV1MiscDiscordMessage502Error1>
      | Declared<"apiV1MiscDiscordMessage503Error1", ApiV1MiscDiscordMessage503Error1>
      | Declared<"apiV1MiscDiscordMessage504Error1", ApiV1MiscDiscordMessage504Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<MiscDiscordDeleteMessageError> = [
      {
        on: 400,
        kind: "apiV1MiscDiscordMessage400Error1",
        decode: { kind: "json", schema: apiV1MiscDiscordMessage400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1MiscDiscordMessage401Error1",
        decode: { kind: "json", schema: apiV1MiscDiscordMessage401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1MiscDiscordMessage403Error1",
        decode: { kind: "json", schema: apiV1MiscDiscordMessage403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1MiscDiscordMessage404Error1",
        decode: { kind: "json", schema: apiV1MiscDiscordMessage404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1MiscDiscordMessage429Error1",
        decode: { kind: "json", schema: apiV1MiscDiscordMessage429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1MiscDiscordMessage500Error1",
        decode: { kind: "json", schema: apiV1MiscDiscordMessage500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1MiscDiscordMessage502Error1",
        decode: { kind: "json", schema: apiV1MiscDiscordMessage502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1MiscDiscordMessage503Error1",
        decode: { kind: "json", schema: apiV1MiscDiscordMessage503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1MiscDiscordMessage504Error1",
        decode: { kind: "json", schema: apiV1MiscDiscordMessage504Error1Schema },
      },
    ];
  }

  export type MiscFacebookDeleteCommentRequest = {
    /** Body */
    body?: ApiV1MiscFacebookCommentRequest1;
  };

  export class MiscFacebookDeleteCommentError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1MiscFacebookComment400Error1", ApiV1MiscFacebookComment400Error1>
      | Declared<"apiV1MiscFacebookComment401Error1", ApiV1MiscFacebookComment401Error1>
      | Declared<"apiV1MiscFacebookComment403Error1", ApiV1MiscFacebookComment403Error1>
      | Declared<"apiV1MiscFacebookComment404Error1", ApiV1MiscFacebookComment404Error1>
      | Declared<"apiV1MiscFacebookComment429Error1", ApiV1MiscFacebookComment429Error1>
      | Declared<"apiV1MiscFacebookComment500Error1", ApiV1MiscFacebookComment500Error1>
      | Declared<"apiV1MiscFacebookComment502Error1", ApiV1MiscFacebookComment502Error1>
      | Declared<"apiV1MiscFacebookComment503Error1", ApiV1MiscFacebookComment503Error1>
      | Declared<"apiV1MiscFacebookComment504Error1", ApiV1MiscFacebookComment504Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<MiscFacebookDeleteCommentError> = [
      {
        on: 400,
        kind: "apiV1MiscFacebookComment400Error1",
        decode: { kind: "json", schema: apiV1MiscFacebookComment400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1MiscFacebookComment401Error1",
        decode: { kind: "json", schema: apiV1MiscFacebookComment401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1MiscFacebookComment403Error1",
        decode: { kind: "json", schema: apiV1MiscFacebookComment403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1MiscFacebookComment404Error1",
        decode: { kind: "json", schema: apiV1MiscFacebookComment404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1MiscFacebookComment429Error1",
        decode: { kind: "json", schema: apiV1MiscFacebookComment429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1MiscFacebookComment500Error1",
        decode: { kind: "json", schema: apiV1MiscFacebookComment500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1MiscFacebookComment502Error1",
        decode: { kind: "json", schema: apiV1MiscFacebookComment502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1MiscFacebookComment503Error1",
        decode: { kind: "json", schema: apiV1MiscFacebookComment503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1MiscFacebookComment504Error1",
        decode: { kind: "json", schema: apiV1MiscFacebookComment504Error1Schema },
      },
    ];
  }

  export type MiscFacebookDeletePostRequest = {
    /** Body */
    body?: ApiV1MiscFacebookPostRequest1;
  };

  export class MiscFacebookDeletePostError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1MiscFacebookPost400Error1", ApiV1MiscFacebookPost400Error1>
      | Declared<"apiV1MiscFacebookPost401Error1", ApiV1MiscFacebookPost401Error1>
      | Declared<"apiV1MiscFacebookPost403Error1", ApiV1MiscFacebookPost403Error1>
      | Declared<"apiV1MiscFacebookPost404Error1", ApiV1MiscFacebookPost404Error1>
      | Declared<"apiV1MiscFacebookPost429Error1", ApiV1MiscFacebookPost429Error1>
      | Declared<"apiV1MiscFacebookPost500Error1", ApiV1MiscFacebookPost500Error1>
      | Declared<"apiV1MiscFacebookPost502Error1", ApiV1MiscFacebookPost502Error1>
      | Declared<"apiV1MiscFacebookPost503Error1", ApiV1MiscFacebookPost503Error1>
      | Declared<"apiV1MiscFacebookPost504Error1", ApiV1MiscFacebookPost504Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<MiscFacebookDeletePostError> = [
      {
        on: 400,
        kind: "apiV1MiscFacebookPost400Error1",
        decode: { kind: "json", schema: apiV1MiscFacebookPost400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1MiscFacebookPost401Error1",
        decode: { kind: "json", schema: apiV1MiscFacebookPost401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1MiscFacebookPost403Error1",
        decode: { kind: "json", schema: apiV1MiscFacebookPost403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1MiscFacebookPost404Error1",
        decode: { kind: "json", schema: apiV1MiscFacebookPost404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1MiscFacebookPost429Error1",
        decode: { kind: "json", schema: apiV1MiscFacebookPost429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1MiscFacebookPost500Error1",
        decode: { kind: "json", schema: apiV1MiscFacebookPost500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1MiscFacebookPost502Error1",
        decode: { kind: "json", schema: apiV1MiscFacebookPost502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1MiscFacebookPost503Error1",
        decode: { kind: "json", schema: apiV1MiscFacebookPost503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1MiscFacebookPost504Error1",
        decode: { kind: "json", schema: apiV1MiscFacebookPost504Error1Schema },
      },
    ];
  }

  export type MiscFacebookEditCommentRequest = {
    /** Body */
    body?: ApiV1MiscFacebookCommentRequest;
  };

  export class MiscFacebookEditCommentError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1MiscFacebookComment400Error1", ApiV1MiscFacebookComment400Error1>
      | Declared<"apiV1MiscFacebookComment401Error1", ApiV1MiscFacebookComment401Error1>
      | Declared<"apiV1MiscFacebookComment403Error1", ApiV1MiscFacebookComment403Error1>
      | Declared<"apiV1MiscFacebookComment404Error1", ApiV1MiscFacebookComment404Error1>
      | Declared<"apiV1MiscFacebookComment429Error1", ApiV1MiscFacebookComment429Error1>
      | Declared<"apiV1MiscFacebookComment500Error1", ApiV1MiscFacebookComment500Error1>
      | Declared<"apiV1MiscFacebookComment502Error1", ApiV1MiscFacebookComment502Error1>
      | Declared<"apiV1MiscFacebookComment503Error1", ApiV1MiscFacebookComment503Error1>
      | Declared<"apiV1MiscFacebookComment504Error1", ApiV1MiscFacebookComment504Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<MiscFacebookEditCommentError> = [
      {
        on: 400,
        kind: "apiV1MiscFacebookComment400Error1",
        decode: { kind: "json", schema: apiV1MiscFacebookComment400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1MiscFacebookComment401Error1",
        decode: { kind: "json", schema: apiV1MiscFacebookComment401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1MiscFacebookComment403Error1",
        decode: { kind: "json", schema: apiV1MiscFacebookComment403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1MiscFacebookComment404Error1",
        decode: { kind: "json", schema: apiV1MiscFacebookComment404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1MiscFacebookComment429Error1",
        decode: { kind: "json", schema: apiV1MiscFacebookComment429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1MiscFacebookComment500Error1",
        decode: { kind: "json", schema: apiV1MiscFacebookComment500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1MiscFacebookComment502Error1",
        decode: { kind: "json", schema: apiV1MiscFacebookComment502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1MiscFacebookComment503Error1",
        decode: { kind: "json", schema: apiV1MiscFacebookComment503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1MiscFacebookComment504Error1",
        decode: { kind: "json", schema: apiV1MiscFacebookComment504Error1Schema },
      },
    ];
  }

  export type MiscFacebookEditPostRequest = {
    /** Body */
    body?: ApiV1MiscFacebookPostRequest;
  };

  export class MiscFacebookEditPostError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1MiscFacebookPost400Error1", ApiV1MiscFacebookPost400Error1>
      | Declared<"apiV1MiscFacebookPost401Error1", ApiV1MiscFacebookPost401Error1>
      | Declared<"apiV1MiscFacebookPost403Error1", ApiV1MiscFacebookPost403Error1>
      | Declared<"apiV1MiscFacebookPost404Error1", ApiV1MiscFacebookPost404Error1>
      | Declared<"apiV1MiscFacebookPost429Error1", ApiV1MiscFacebookPost429Error1>
      | Declared<"apiV1MiscFacebookPost500Error1", ApiV1MiscFacebookPost500Error1>
      | Declared<"apiV1MiscFacebookPost502Error1", ApiV1MiscFacebookPost502Error1>
      | Declared<"apiV1MiscFacebookPost503Error1", ApiV1MiscFacebookPost503Error1>
      | Declared<"apiV1MiscFacebookPost504Error1", ApiV1MiscFacebookPost504Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<MiscFacebookEditPostError> = [
      {
        on: 400,
        kind: "apiV1MiscFacebookPost400Error1",
        decode: { kind: "json", schema: apiV1MiscFacebookPost400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1MiscFacebookPost401Error1",
        decode: { kind: "json", schema: apiV1MiscFacebookPost401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1MiscFacebookPost403Error1",
        decode: { kind: "json", schema: apiV1MiscFacebookPost403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1MiscFacebookPost404Error1",
        decode: { kind: "json", schema: apiV1MiscFacebookPost404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1MiscFacebookPost429Error1",
        decode: { kind: "json", schema: apiV1MiscFacebookPost429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1MiscFacebookPost500Error1",
        decode: { kind: "json", schema: apiV1MiscFacebookPost500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1MiscFacebookPost502Error1",
        decode: { kind: "json", schema: apiV1MiscFacebookPost502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1MiscFacebookPost503Error1",
        decode: { kind: "json", schema: apiV1MiscFacebookPost503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1MiscFacebookPost504Error1",
        decode: { kind: "json", schema: apiV1MiscFacebookPost504Error1Schema },
      },
    ];
  }

  export type MiscFacebookGetRecommendationByIdRequest = {
    recommendationId: string;
    teamId: string;
  };

  export class MiscFacebookGetRecommendationByIdError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1MiscFacebookRecommendations400Error1", ApiV1MiscFacebookRecommendations400Error1>
      | Declared<"apiV1MiscFacebookRecommendations401Error1", ApiV1MiscFacebookRecommendations401Error1>
      | Declared<"apiV1MiscFacebookRecommendations403Error1", ApiV1MiscFacebookRecommendations403Error1>
      | Declared<"apiV1MiscFacebookRecommendations404Error1", ApiV1MiscFacebookRecommendations404Error1>
      | Declared<"apiV1MiscFacebookRecommendations429Error1", ApiV1MiscFacebookRecommendations429Error1>
      | Declared<"apiV1MiscFacebookRecommendations500Error1", ApiV1MiscFacebookRecommendations500Error1>
      | Declared<"apiV1MiscFacebookRecommendations502Error1", ApiV1MiscFacebookRecommendations502Error1>
      | Declared<"apiV1MiscFacebookRecommendations503Error1", ApiV1MiscFacebookRecommendations503Error1>
      | Declared<"apiV1MiscFacebookRecommendations504Error1", ApiV1MiscFacebookRecommendations504Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<MiscFacebookGetRecommendationByIdError> = [
      {
        on: 400,
        kind: "apiV1MiscFacebookRecommendations400Error1",
        decode: { kind: "json", schema: apiV1MiscFacebookRecommendations400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1MiscFacebookRecommendations401Error1",
        decode: { kind: "json", schema: apiV1MiscFacebookRecommendations401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1MiscFacebookRecommendations403Error1",
        decode: { kind: "json", schema: apiV1MiscFacebookRecommendations403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1MiscFacebookRecommendations404Error1",
        decode: { kind: "json", schema: apiV1MiscFacebookRecommendations404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1MiscFacebookRecommendations429Error1",
        decode: { kind: "json", schema: apiV1MiscFacebookRecommendations429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1MiscFacebookRecommendations500Error1",
        decode: { kind: "json", schema: apiV1MiscFacebookRecommendations500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1MiscFacebookRecommendations502Error1",
        decode: { kind: "json", schema: apiV1MiscFacebookRecommendations502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1MiscFacebookRecommendations503Error1",
        decode: { kind: "json", schema: apiV1MiscFacebookRecommendations503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1MiscFacebookRecommendations504Error1",
        decode: { kind: "json", schema: apiV1MiscFacebookRecommendations504Error1Schema },
      },
    ];
  }

  export type MiscFacebookGetRecommendationCommentsRequest = {
    recommendationId: string;
    teamId: string;
  };

  export class MiscFacebookGetRecommendationCommentsError extends ApiError {
    declare readonly payload:
      | Declared<
          "apiV1MiscFacebookRecommendationsComments400Error1",
          ApiV1MiscFacebookRecommendationsComments400Error1
        >
      | Declared<
          "apiV1MiscFacebookRecommendationsComments401Error1",
          ApiV1MiscFacebookRecommendationsComments401Error1
        >
      | Declared<
          "apiV1MiscFacebookRecommendationsComments403Error1",
          ApiV1MiscFacebookRecommendationsComments403Error1
        >
      | Declared<
          "apiV1MiscFacebookRecommendationsComments404Error1",
          ApiV1MiscFacebookRecommendationsComments404Error1
        >
      | Declared<
          "apiV1MiscFacebookRecommendationsComments429Error1",
          ApiV1MiscFacebookRecommendationsComments429Error1
        >
      | Declared<
          "apiV1MiscFacebookRecommendationsComments500Error1",
          ApiV1MiscFacebookRecommendationsComments500Error1
        >
      | Declared<
          "apiV1MiscFacebookRecommendationsComments502Error1",
          ApiV1MiscFacebookRecommendationsComments502Error1
        >
      | Declared<
          "apiV1MiscFacebookRecommendationsComments503Error1",
          ApiV1MiscFacebookRecommendationsComments503Error1
        >
      | Declared<
          "apiV1MiscFacebookRecommendationsComments504Error1",
          ApiV1MiscFacebookRecommendationsComments504Error1
        >
      | Undeclared;

    static readonly errors: ErrorDecoders<MiscFacebookGetRecommendationCommentsError> = [
      {
        on: 400,
        kind: "apiV1MiscFacebookRecommendationsComments400Error1",
        decode: { kind: "json", schema: apiV1MiscFacebookRecommendationsComments400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1MiscFacebookRecommendationsComments401Error1",
        decode: { kind: "json", schema: apiV1MiscFacebookRecommendationsComments401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1MiscFacebookRecommendationsComments403Error1",
        decode: { kind: "json", schema: apiV1MiscFacebookRecommendationsComments403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1MiscFacebookRecommendationsComments404Error1",
        decode: { kind: "json", schema: apiV1MiscFacebookRecommendationsComments404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1MiscFacebookRecommendationsComments429Error1",
        decode: { kind: "json", schema: apiV1MiscFacebookRecommendationsComments429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1MiscFacebookRecommendationsComments500Error1",
        decode: { kind: "json", schema: apiV1MiscFacebookRecommendationsComments500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1MiscFacebookRecommendationsComments502Error1",
        decode: { kind: "json", schema: apiV1MiscFacebookRecommendationsComments502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1MiscFacebookRecommendationsComments503Error1",
        decode: { kind: "json", schema: apiV1MiscFacebookRecommendationsComments503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1MiscFacebookRecommendationsComments504Error1",
        decode: { kind: "json", schema: apiV1MiscFacebookRecommendationsComments504Error1Schema },
      },
    ];
  }

  export type MiscFacebookGetRecommendationImportByIdRequest = {
    importId: string;
  };

  export class MiscFacebookGetRecommendationImportByIdError extends ApiError {
    declare readonly payload:
      | Declared<
          "apiV1MiscFacebookRecommendationsImport400Error1",
          ApiV1MiscFacebookRecommendationsImport400Error1
        >
      | Declared<
          "apiV1MiscFacebookRecommendationsImport401Error1",
          ApiV1MiscFacebookRecommendationsImport401Error1
        >
      | Declared<
          "apiV1MiscFacebookRecommendationsImport403Error1",
          ApiV1MiscFacebookRecommendationsImport403Error1
        >
      | Declared<
          "apiV1MiscFacebookRecommendationsImport404Error1",
          ApiV1MiscFacebookRecommendationsImport404Error1
        >
      | Declared<
          "apiV1MiscFacebookRecommendationsImport429Error1",
          ApiV1MiscFacebookRecommendationsImport429Error1
        >
      | Declared<
          "apiV1MiscFacebookRecommendationsImport500Error1",
          ApiV1MiscFacebookRecommendationsImport500Error1
        >
      | Declared<
          "apiV1MiscFacebookRecommendationsImport502Error1",
          ApiV1MiscFacebookRecommendationsImport502Error1
        >
      | Declared<
          "apiV1MiscFacebookRecommendationsImport503Error1",
          ApiV1MiscFacebookRecommendationsImport503Error1
        >
      | Declared<
          "apiV1MiscFacebookRecommendationsImport504Error1",
          ApiV1MiscFacebookRecommendationsImport504Error1
        >
      | Undeclared;

    static readonly errors: ErrorDecoders<MiscFacebookGetRecommendationImportByIdError> = [
      {
        on: 400,
        kind: "apiV1MiscFacebookRecommendationsImport400Error1",
        decode: { kind: "json", schema: apiV1MiscFacebookRecommendationsImport400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1MiscFacebookRecommendationsImport401Error1",
        decode: { kind: "json", schema: apiV1MiscFacebookRecommendationsImport401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1MiscFacebookRecommendationsImport403Error1",
        decode: { kind: "json", schema: apiV1MiscFacebookRecommendationsImport403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1MiscFacebookRecommendationsImport404Error1",
        decode: { kind: "json", schema: apiV1MiscFacebookRecommendationsImport404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1MiscFacebookRecommendationsImport429Error1",
        decode: { kind: "json", schema: apiV1MiscFacebookRecommendationsImport429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1MiscFacebookRecommendationsImport500Error1",
        decode: { kind: "json", schema: apiV1MiscFacebookRecommendationsImport500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1MiscFacebookRecommendationsImport502Error1",
        decode: { kind: "json", schema: apiV1MiscFacebookRecommendationsImport502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1MiscFacebookRecommendationsImport503Error1",
        decode: { kind: "json", schema: apiV1MiscFacebookRecommendationsImport503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1MiscFacebookRecommendationsImport504Error1",
        decode: { kind: "json", schema: apiV1MiscFacebookRecommendationsImport504Error1Schema },
      },
    ];
  }

  export type MiscFacebookGetRecommendationImportStatusRequest = {
    teamId: string;
  };

  export class MiscFacebookGetRecommendationImportStatusError extends ApiError {
    declare readonly payload:
      | Declared<
          "apiV1MiscFacebookRecommendationsImport400Error1",
          ApiV1MiscFacebookRecommendationsImport400Error1
        >
      | Declared<
          "apiV1MiscFacebookRecommendationsImport401Error1",
          ApiV1MiscFacebookRecommendationsImport401Error1
        >
      | Declared<
          "apiV1MiscFacebookRecommendationsImport403Error1",
          ApiV1MiscFacebookRecommendationsImport403Error1
        >
      | Declared<
          "apiV1MiscFacebookRecommendationsImport404Error1",
          ApiV1MiscFacebookRecommendationsImport404Error1
        >
      | Declared<
          "apiV1MiscFacebookRecommendationsImport429Error1",
          ApiV1MiscFacebookRecommendationsImport429Error1
        >
      | Declared<
          "apiV1MiscFacebookRecommendationsImport500Error1",
          ApiV1MiscFacebookRecommendationsImport500Error1
        >
      | Declared<
          "apiV1MiscFacebookRecommendationsImport502Error1",
          ApiV1MiscFacebookRecommendationsImport502Error1
        >
      | Declared<
          "apiV1MiscFacebookRecommendationsImport503Error1",
          ApiV1MiscFacebookRecommendationsImport503Error1
        >
      | Declared<
          "apiV1MiscFacebookRecommendationsImport504Error1",
          ApiV1MiscFacebookRecommendationsImport504Error1
        >
      | Undeclared;

    static readonly errors: ErrorDecoders<MiscFacebookGetRecommendationImportStatusError> = [
      {
        on: 400,
        kind: "apiV1MiscFacebookRecommendationsImport400Error1",
        decode: { kind: "json", schema: apiV1MiscFacebookRecommendationsImport400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1MiscFacebookRecommendationsImport401Error1",
        decode: { kind: "json", schema: apiV1MiscFacebookRecommendationsImport401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1MiscFacebookRecommendationsImport403Error1",
        decode: { kind: "json", schema: apiV1MiscFacebookRecommendationsImport403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1MiscFacebookRecommendationsImport404Error1",
        decode: { kind: "json", schema: apiV1MiscFacebookRecommendationsImport404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1MiscFacebookRecommendationsImport429Error1",
        decode: { kind: "json", schema: apiV1MiscFacebookRecommendationsImport429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1MiscFacebookRecommendationsImport500Error1",
        decode: { kind: "json", schema: apiV1MiscFacebookRecommendationsImport500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1MiscFacebookRecommendationsImport502Error1",
        decode: { kind: "json", schema: apiV1MiscFacebookRecommendationsImport502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1MiscFacebookRecommendationsImport503Error1",
        decode: { kind: "json", schema: apiV1MiscFacebookRecommendationsImport503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1MiscFacebookRecommendationsImport504Error1",
        decode: { kind: "json", schema: apiV1MiscFacebookRecommendationsImport504Error1Schema },
      },
    ];
  }

  export type MiscFacebookGetRecommendationsRequest = {
    teamId: string;
    /** @default 50 */
    limit?: number;
    /** @default 0 */
    offset?: number | null;
  };

  export const miscFacebookGetRecommendationsRequestSchema: Schema<MiscFacebookGetRecommendationsRequest> =
    s.lazySchema(() =>
      s.object<MiscFacebookGetRecommendationsRequest>({
        teamId: s.string(),
        limit: s.defaulted(s.float64().check(s.gte(1), s.lte(100)), 50),
        offset: s.defaulted(s.nullable(s.float64().check(s.gte(0))), 0),
      }),
    );

  export class MiscFacebookGetRecommendationsError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1MiscFacebookRecommendations400Error1", ApiV1MiscFacebookRecommendations400Error1>
      | Declared<"apiV1MiscFacebookRecommendations401Error1", ApiV1MiscFacebookRecommendations401Error1>
      | Declared<"apiV1MiscFacebookRecommendations403Error1", ApiV1MiscFacebookRecommendations403Error1>
      | Declared<"apiV1MiscFacebookRecommendations404Error1", ApiV1MiscFacebookRecommendations404Error1>
      | Declared<"apiV1MiscFacebookRecommendations429Error1", ApiV1MiscFacebookRecommendations429Error1>
      | Declared<"apiV1MiscFacebookRecommendations500Error1", ApiV1MiscFacebookRecommendations500Error1>
      | Declared<"apiV1MiscFacebookRecommendations502Error1", ApiV1MiscFacebookRecommendations502Error1>
      | Declared<"apiV1MiscFacebookRecommendations503Error1", ApiV1MiscFacebookRecommendations503Error1>
      | Declared<"apiV1MiscFacebookRecommendations504Error1", ApiV1MiscFacebookRecommendations504Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<MiscFacebookGetRecommendationsError> = [
      {
        on: 400,
        kind: "apiV1MiscFacebookRecommendations400Error1",
        decode: { kind: "json", schema: apiV1MiscFacebookRecommendations400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1MiscFacebookRecommendations401Error1",
        decode: { kind: "json", schema: apiV1MiscFacebookRecommendations401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1MiscFacebookRecommendations403Error1",
        decode: { kind: "json", schema: apiV1MiscFacebookRecommendations403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1MiscFacebookRecommendations404Error1",
        decode: { kind: "json", schema: apiV1MiscFacebookRecommendations404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1MiscFacebookRecommendations429Error1",
        decode: { kind: "json", schema: apiV1MiscFacebookRecommendations429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1MiscFacebookRecommendations500Error1",
        decode: { kind: "json", schema: apiV1MiscFacebookRecommendations500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1MiscFacebookRecommendations502Error1",
        decode: { kind: "json", schema: apiV1MiscFacebookRecommendations502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1MiscFacebookRecommendations503Error1",
        decode: { kind: "json", schema: apiV1MiscFacebookRecommendations503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1MiscFacebookRecommendations504Error1",
        decode: { kind: "json", schema: apiV1MiscFacebookRecommendations504Error1Schema },
      },
    ];
  }

  export class MiscFacebookGetTextFormatPresetsError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1MiscFacebookTextFormatPresets400Error1", ApiV1MiscFacebookTextFormatPresets400Error1>
      | Declared<"apiV1MiscFacebookTextFormatPresets401Error1", ApiV1MiscFacebookTextFormatPresets401Error1>
      | Declared<"apiV1MiscFacebookTextFormatPresets403Error1", ApiV1MiscFacebookTextFormatPresets403Error1>
      | Declared<"apiV1MiscFacebookTextFormatPresets404Error1", ApiV1MiscFacebookTextFormatPresets404Error1>
      | Declared<"apiV1MiscFacebookTextFormatPresets429Error1", ApiV1MiscFacebookTextFormatPresets429Error1>
      | Declared<"apiV1MiscFacebookTextFormatPresets500Error1", ApiV1MiscFacebookTextFormatPresets500Error1>
      | Declared<"apiV1MiscFacebookTextFormatPresets502Error1", ApiV1MiscFacebookTextFormatPresets502Error1>
      | Declared<"apiV1MiscFacebookTextFormatPresets503Error1", ApiV1MiscFacebookTextFormatPresets503Error1>
      | Declared<"apiV1MiscFacebookTextFormatPresets504Error1", ApiV1MiscFacebookTextFormatPresets504Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<MiscFacebookGetTextFormatPresetsError> = [
      {
        on: 400,
        kind: "apiV1MiscFacebookTextFormatPresets400Error1",
        decode: { kind: "json", schema: apiV1MiscFacebookTextFormatPresets400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1MiscFacebookTextFormatPresets401Error1",
        decode: { kind: "json", schema: apiV1MiscFacebookTextFormatPresets401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1MiscFacebookTextFormatPresets403Error1",
        decode: { kind: "json", schema: apiV1MiscFacebookTextFormatPresets403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1MiscFacebookTextFormatPresets404Error1",
        decode: { kind: "json", schema: apiV1MiscFacebookTextFormatPresets404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1MiscFacebookTextFormatPresets429Error1",
        decode: { kind: "json", schema: apiV1MiscFacebookTextFormatPresets429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1MiscFacebookTextFormatPresets500Error1",
        decode: { kind: "json", schema: apiV1MiscFacebookTextFormatPresets500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1MiscFacebookTextFormatPresets502Error1",
        decode: { kind: "json", schema: apiV1MiscFacebookTextFormatPresets502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1MiscFacebookTextFormatPresets503Error1",
        decode: { kind: "json", schema: apiV1MiscFacebookTextFormatPresets503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1MiscFacebookTextFormatPresets504Error1",
        decode: { kind: "json", schema: apiV1MiscFacebookTextFormatPresets504Error1Schema },
      },
    ];
  }

  export type MiscFacebookGetTokenDebugRequest = {
    teamId: string;
  };

  export class MiscFacebookGetTokenDebugError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1MiscFacebookTokenDebug400Error1", ApiV1MiscFacebookTokenDebug400Error1>
      | Declared<"apiV1MiscFacebookTokenDebug401Error1", ApiV1MiscFacebookTokenDebug401Error1>
      | Declared<"apiV1MiscFacebookTokenDebug403Error1", ApiV1MiscFacebookTokenDebug403Error1>
      | Declared<"apiV1MiscFacebookTokenDebug404Error1", ApiV1MiscFacebookTokenDebug404Error1>
      | Declared<"apiV1MiscFacebookTokenDebug429Error1", ApiV1MiscFacebookTokenDebug429Error1>
      | Declared<"apiV1MiscFacebookTokenDebug500Error1", ApiV1MiscFacebookTokenDebug500Error1>
      | Declared<"apiV1MiscFacebookTokenDebug502Error1", ApiV1MiscFacebookTokenDebug502Error1>
      | Declared<"apiV1MiscFacebookTokenDebug503Error1", ApiV1MiscFacebookTokenDebug503Error1>
      | Declared<"apiV1MiscFacebookTokenDebug504Error1", ApiV1MiscFacebookTokenDebug504Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<MiscFacebookGetTokenDebugError> = [
      {
        on: 400,
        kind: "apiV1MiscFacebookTokenDebug400Error1",
        decode: { kind: "json", schema: apiV1MiscFacebookTokenDebug400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1MiscFacebookTokenDebug401Error1",
        decode: { kind: "json", schema: apiV1MiscFacebookTokenDebug401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1MiscFacebookTokenDebug403Error1",
        decode: { kind: "json", schema: apiV1MiscFacebookTokenDebug403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1MiscFacebookTokenDebug404Error1",
        decode: { kind: "json", schema: apiV1MiscFacebookTokenDebug404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1MiscFacebookTokenDebug429Error1",
        decode: { kind: "json", schema: apiV1MiscFacebookTokenDebug429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1MiscFacebookTokenDebug500Error1",
        decode: { kind: "json", schema: apiV1MiscFacebookTokenDebug500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1MiscFacebookTokenDebug502Error1",
        decode: { kind: "json", schema: apiV1MiscFacebookTokenDebug502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1MiscFacebookTokenDebug503Error1",
        decode: { kind: "json", schema: apiV1MiscFacebookTokenDebug503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1MiscFacebookTokenDebug504Error1",
        decode: { kind: "json", schema: apiV1MiscFacebookTokenDebug504Error1Schema },
      },
    ];
  }

  export type MiscFacebookImportRecommendationsRequest = {
    /** Body */
    body?: ApiV1MiscFacebookRecommendationsImportRequest;
  };

  export class MiscFacebookImportRecommendationsError extends ApiError {
    declare readonly payload:
      | Declared<
          "apiV1MiscFacebookRecommendationsImport400Error1",
          ApiV1MiscFacebookRecommendationsImport400Error1
        >
      | Declared<
          "apiV1MiscFacebookRecommendationsImport401Error1",
          ApiV1MiscFacebookRecommendationsImport401Error1
        >
      | Declared<
          "apiV1MiscFacebookRecommendationsImport403Error1",
          ApiV1MiscFacebookRecommendationsImport403Error1
        >
      | Declared<
          "apiV1MiscFacebookRecommendationsImport404Error1",
          ApiV1MiscFacebookRecommendationsImport404Error1
        >
      | Declared<
          "apiV1MiscFacebookRecommendationsImport409Error1",
          ApiV1MiscFacebookRecommendationsImport409Error1
        >
      | Declared<
          "apiV1MiscFacebookRecommendationsImport429Error1",
          ApiV1MiscFacebookRecommendationsImport429Error1
        >
      | Declared<
          "apiV1MiscFacebookRecommendationsImport500Error1",
          ApiV1MiscFacebookRecommendationsImport500Error1
        >
      | Declared<
          "apiV1MiscFacebookRecommendationsImport502Error1",
          ApiV1MiscFacebookRecommendationsImport502Error1
        >
      | Declared<
          "apiV1MiscFacebookRecommendationsImport503Error1",
          ApiV1MiscFacebookRecommendationsImport503Error1
        >
      | Declared<
          "apiV1MiscFacebookRecommendationsImport504Error1",
          ApiV1MiscFacebookRecommendationsImport504Error1
        >
      | Undeclared;

    static readonly errors: ErrorDecoders<MiscFacebookImportRecommendationsError> = [
      {
        on: 400,
        kind: "apiV1MiscFacebookRecommendationsImport400Error1",
        decode: { kind: "json", schema: apiV1MiscFacebookRecommendationsImport400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1MiscFacebookRecommendationsImport401Error1",
        decode: { kind: "json", schema: apiV1MiscFacebookRecommendationsImport401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1MiscFacebookRecommendationsImport403Error1",
        decode: { kind: "json", schema: apiV1MiscFacebookRecommendationsImport403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1MiscFacebookRecommendationsImport404Error1",
        decode: { kind: "json", schema: apiV1MiscFacebookRecommendationsImport404Error1Schema },
      },
      {
        on: 409,
        kind: "apiV1MiscFacebookRecommendationsImport409Error1",
        decode: { kind: "json", schema: apiV1MiscFacebookRecommendationsImport409Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1MiscFacebookRecommendationsImport429Error1",
        decode: { kind: "json", schema: apiV1MiscFacebookRecommendationsImport429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1MiscFacebookRecommendationsImport500Error1",
        decode: { kind: "json", schema: apiV1MiscFacebookRecommendationsImport500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1MiscFacebookRecommendationsImport502Error1",
        decode: { kind: "json", schema: apiV1MiscFacebookRecommendationsImport502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1MiscFacebookRecommendationsImport503Error1",
        decode: { kind: "json", schema: apiV1MiscFacebookRecommendationsImport503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1MiscFacebookRecommendationsImport504Error1",
        decode: { kind: "json", schema: apiV1MiscFacebookRecommendationsImport504Error1Schema },
      },
    ];
  }

  export type MiscFacebookReplyToRecommendationRequest = {
    recommendationId: string;
    /** Body */
    body?: ApiV1MiscFacebookRecommendationsReplyRequest;
  };

  export class MiscFacebookReplyToRecommendationError extends ApiError {
    declare readonly payload:
      | Declared<
          "apiV1MiscFacebookRecommendationsReply400Error1",
          ApiV1MiscFacebookRecommendationsReply400Error1
        >
      | Declared<
          "apiV1MiscFacebookRecommendationsReply401Error1",
          ApiV1MiscFacebookRecommendationsReply401Error1
        >
      | Declared<
          "apiV1MiscFacebookRecommendationsReply403Error1",
          ApiV1MiscFacebookRecommendationsReply403Error1
        >
      | Declared<
          "apiV1MiscFacebookRecommendationsReply404Error1",
          ApiV1MiscFacebookRecommendationsReply404Error1
        >
      | Declared<
          "apiV1MiscFacebookRecommendationsReply429Error1",
          ApiV1MiscFacebookRecommendationsReply429Error1
        >
      | Declared<
          "apiV1MiscFacebookRecommendationsReply500Error1",
          ApiV1MiscFacebookRecommendationsReply500Error1
        >
      | Declared<
          "apiV1MiscFacebookRecommendationsReply502Error1",
          ApiV1MiscFacebookRecommendationsReply502Error1
        >
      | Declared<
          "apiV1MiscFacebookRecommendationsReply503Error1",
          ApiV1MiscFacebookRecommendationsReply503Error1
        >
      | Declared<
          "apiV1MiscFacebookRecommendationsReply504Error1",
          ApiV1MiscFacebookRecommendationsReply504Error1
        >
      | Undeclared;

    static readonly errors: ErrorDecoders<MiscFacebookReplyToRecommendationError> = [
      {
        on: 400,
        kind: "apiV1MiscFacebookRecommendationsReply400Error1",
        decode: { kind: "json", schema: apiV1MiscFacebookRecommendationsReply400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1MiscFacebookRecommendationsReply401Error1",
        decode: { kind: "json", schema: apiV1MiscFacebookRecommendationsReply401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1MiscFacebookRecommendationsReply403Error1",
        decode: { kind: "json", schema: apiV1MiscFacebookRecommendationsReply403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1MiscFacebookRecommendationsReply404Error1",
        decode: { kind: "json", schema: apiV1MiscFacebookRecommendationsReply404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1MiscFacebookRecommendationsReply429Error1",
        decode: { kind: "json", schema: apiV1MiscFacebookRecommendationsReply429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1MiscFacebookRecommendationsReply500Error1",
        decode: { kind: "json", schema: apiV1MiscFacebookRecommendationsReply500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1MiscFacebookRecommendationsReply502Error1",
        decode: { kind: "json", schema: apiV1MiscFacebookRecommendationsReply502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1MiscFacebookRecommendationsReply503Error1",
        decode: { kind: "json", schema: apiV1MiscFacebookRecommendationsReply503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1MiscFacebookRecommendationsReply504Error1",
        decode: { kind: "json", schema: apiV1MiscFacebookRecommendationsReply504Error1Schema },
      },
    ];
  }

  export type MiscFacebookReplyToRecommendationCommentRequest = {
    recommendationId: string;
    commentId: string;
    /** Body */
    body?: ApiV1MiscFacebookRecommendationsCommentsReplyRequest;
  };

  export class MiscFacebookReplyToRecommendationCommentError extends ApiError {
    declare readonly payload:
      | Declared<
          "apiV1MiscFacebookRecommendationsCommentsReply400Error1",
          ApiV1MiscFacebookRecommendationsCommentsReply400Error1
        >
      | Declared<
          "apiV1MiscFacebookRecommendationsCommentsReply401Error1",
          ApiV1MiscFacebookRecommendationsCommentsReply401Error1
        >
      | Declared<
          "apiV1MiscFacebookRecommendationsCommentsReply403Error1",
          ApiV1MiscFacebookRecommendationsCommentsReply403Error1
        >
      | Declared<
          "apiV1MiscFacebookRecommendationsCommentsReply404Error1",
          ApiV1MiscFacebookRecommendationsCommentsReply404Error1
        >
      | Declared<
          "apiV1MiscFacebookRecommendationsCommentsReply429Error1",
          ApiV1MiscFacebookRecommendationsCommentsReply429Error1
        >
      | Declared<
          "apiV1MiscFacebookRecommendationsCommentsReply500Error1",
          ApiV1MiscFacebookRecommendationsCommentsReply500Error1
        >
      | Declared<
          "apiV1MiscFacebookRecommendationsCommentsReply502Error1",
          ApiV1MiscFacebookRecommendationsCommentsReply502Error1
        >
      | Declared<
          "apiV1MiscFacebookRecommendationsCommentsReply503Error1",
          ApiV1MiscFacebookRecommendationsCommentsReply503Error1
        >
      | Declared<
          "apiV1MiscFacebookRecommendationsCommentsReply504Error1",
          ApiV1MiscFacebookRecommendationsCommentsReply504Error1
        >
      | Undeclared;

    static readonly errors: ErrorDecoders<MiscFacebookReplyToRecommendationCommentError> = [
      {
        on: 400,
        kind: "apiV1MiscFacebookRecommendationsCommentsReply400Error1",
        decode: { kind: "json", schema: apiV1MiscFacebookRecommendationsCommentsReply400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1MiscFacebookRecommendationsCommentsReply401Error1",
        decode: { kind: "json", schema: apiV1MiscFacebookRecommendationsCommentsReply401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1MiscFacebookRecommendationsCommentsReply403Error1",
        decode: { kind: "json", schema: apiV1MiscFacebookRecommendationsCommentsReply403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1MiscFacebookRecommendationsCommentsReply404Error1",
        decode: { kind: "json", schema: apiV1MiscFacebookRecommendationsCommentsReply404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1MiscFacebookRecommendationsCommentsReply429Error1",
        decode: { kind: "json", schema: apiV1MiscFacebookRecommendationsCommentsReply429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1MiscFacebookRecommendationsCommentsReply500Error1",
        decode: { kind: "json", schema: apiV1MiscFacebookRecommendationsCommentsReply500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1MiscFacebookRecommendationsCommentsReply502Error1",
        decode: { kind: "json", schema: apiV1MiscFacebookRecommendationsCommentsReply502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1MiscFacebookRecommendationsCommentsReply503Error1",
        decode: { kind: "json", schema: apiV1MiscFacebookRecommendationsCommentsReply503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1MiscFacebookRecommendationsCommentsReply504Error1",
        decode: { kind: "json", schema: apiV1MiscFacebookRecommendationsCommentsReply504Error1Schema },
      },
    ];
  }

  export type MiscFacebookSearchPagesRequest = {
    teamId: string;
    /** Free-text query used to search Facebook Pages */
    q: string;
    /** @default 10 */
    limit?: number;
  };

  export const miscFacebookSearchPagesRequestSchema: Schema<MiscFacebookSearchPagesRequest> = s.lazySchema(
    () =>
      s.object<MiscFacebookSearchPagesRequest>({
        teamId: s.string(),
        q: s.string().check(s.minLength(1), s.maxLength(100)),
        limit: s.defaulted(s.int().check(s.gte(1), s.lte(25)), 10),
      }),
  );

  export class MiscFacebookSearchPagesError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1MiscFacebookPages400Error1", ApiV1MiscFacebookPages400Error1>
      | Declared<"apiV1MiscFacebookPages401Error1", ApiV1MiscFacebookPages401Error1>
      | Declared<"apiV1MiscFacebookPages403Error1", ApiV1MiscFacebookPages403Error1>
      | Declared<"apiV1MiscFacebookPages404Error1", ApiV1MiscFacebookPages404Error1>
      | Declared<"apiV1MiscFacebookPages429Error1", ApiV1MiscFacebookPages429Error1>
      | Declared<"apiV1MiscFacebookPages500Error1", ApiV1MiscFacebookPages500Error1>
      | Declared<"apiV1MiscFacebookPages502Error1", ApiV1MiscFacebookPages502Error1>
      | Declared<"apiV1MiscFacebookPages503Error1", ApiV1MiscFacebookPages503Error1>
      | Declared<"apiV1MiscFacebookPages504Error1", ApiV1MiscFacebookPages504Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<MiscFacebookSearchPagesError> = [
      {
        on: 400,
        kind: "apiV1MiscFacebookPages400Error1",
        decode: { kind: "json", schema: apiV1MiscFacebookPages400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1MiscFacebookPages401Error1",
        decode: { kind: "json", schema: apiV1MiscFacebookPages401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1MiscFacebookPages403Error1",
        decode: { kind: "json", schema: apiV1MiscFacebookPages403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1MiscFacebookPages404Error1",
        decode: { kind: "json", schema: apiV1MiscFacebookPages404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1MiscFacebookPages429Error1",
        decode: { kind: "json", schema: apiV1MiscFacebookPages429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1MiscFacebookPages500Error1",
        decode: { kind: "json", schema: apiV1MiscFacebookPages500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1MiscFacebookPages502Error1",
        decode: { kind: "json", schema: apiV1MiscFacebookPages502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1MiscFacebookPages503Error1",
        decode: { kind: "json", schema: apiV1MiscFacebookPages503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1MiscFacebookPages504Error1",
        decode: { kind: "json", schema: apiV1MiscFacebookPages504Error1Schema },
      },
    ];
  }

  export type MiscGoogleBusinessAddMediaRequest = {
    /** Body */
    body?: ApiV1MiscGoogleBusinessMediaRequest;
  };

  export class MiscGoogleBusinessAddMediaError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1MiscGoogleBusinessMedia400Error1", ApiV1MiscGoogleBusinessMedia400Error1>
      | Declared<"apiV1MiscGoogleBusinessMedia401Error1", ApiV1MiscGoogleBusinessMedia401Error1>
      | Declared<"apiV1MiscGoogleBusinessMedia403Error1", ApiV1MiscGoogleBusinessMedia403Error1>
      | Declared<"apiV1MiscGoogleBusinessMedia404Error1", ApiV1MiscGoogleBusinessMedia404Error1>
      | Declared<"apiV1MiscGoogleBusinessMedia429Error1", ApiV1MiscGoogleBusinessMedia429Error1>
      | Declared<"apiV1MiscGoogleBusinessMedia500Error1", ApiV1MiscGoogleBusinessMedia500Error1>
      | Declared<"apiV1MiscGoogleBusinessMedia502Error1", ApiV1MiscGoogleBusinessMedia502Error1>
      | Declared<"apiV1MiscGoogleBusinessMedia503Error1", ApiV1MiscGoogleBusinessMedia503Error1>
      | Declared<"apiV1MiscGoogleBusinessMedia504Error1", ApiV1MiscGoogleBusinessMedia504Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<MiscGoogleBusinessAddMediaError> = [
      {
        on: 400,
        kind: "apiV1MiscGoogleBusinessMedia400Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessMedia400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1MiscGoogleBusinessMedia401Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessMedia401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1MiscGoogleBusinessMedia403Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessMedia403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1MiscGoogleBusinessMedia404Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessMedia404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1MiscGoogleBusinessMedia429Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessMedia429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1MiscGoogleBusinessMedia500Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessMedia500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1MiscGoogleBusinessMedia502Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessMedia502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1MiscGoogleBusinessMedia503Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessMedia503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1MiscGoogleBusinessMedia504Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessMedia504Error1Schema },
      },
    ];
  }

  export type MiscGoogleBusinessCreatePlaceActionLinkRequest = {
    /** Body */
    body?: ApiV1MiscGoogleBusinessLocationPlaceActionLinksRequest;
  };

  export class MiscGoogleBusinessCreatePlaceActionLinkError extends ApiError {
    declare readonly payload:
      | Declared<
          "apiV1MiscGoogleBusinessLocationPlaceActionLinks400Error1",
          ApiV1MiscGoogleBusinessLocationPlaceActionLinks400Error1
        >
      | Declared<
          "apiV1MiscGoogleBusinessLocationPlaceActionLinks401Error1",
          ApiV1MiscGoogleBusinessLocationPlaceActionLinks401Error1
        >
      | Declared<
          "apiV1MiscGoogleBusinessLocationPlaceActionLinks403Error1",
          ApiV1MiscGoogleBusinessLocationPlaceActionLinks403Error1
        >
      | Declared<
          "apiV1MiscGoogleBusinessLocationPlaceActionLinks404Error1",
          ApiV1MiscGoogleBusinessLocationPlaceActionLinks404Error1
        >
      | Declared<
          "apiV1MiscGoogleBusinessLocationPlaceActionLinks429Error1",
          ApiV1MiscGoogleBusinessLocationPlaceActionLinks429Error1
        >
      | Declared<
          "apiV1MiscGoogleBusinessLocationPlaceActionLinks500Error1",
          ApiV1MiscGoogleBusinessLocationPlaceActionLinks500Error1
        >
      | Declared<
          "apiV1MiscGoogleBusinessLocationPlaceActionLinks502Error1",
          ApiV1MiscGoogleBusinessLocationPlaceActionLinks502Error1
        >
      | Declared<
          "apiV1MiscGoogleBusinessLocationPlaceActionLinks503Error1",
          ApiV1MiscGoogleBusinessLocationPlaceActionLinks503Error1
        >
      | Declared<
          "apiV1MiscGoogleBusinessLocationPlaceActionLinks504Error1",
          ApiV1MiscGoogleBusinessLocationPlaceActionLinks504Error1
        >
      | Undeclared;

    static readonly errors: ErrorDecoders<MiscGoogleBusinessCreatePlaceActionLinkError> = [
      {
        on: 400,
        kind: "apiV1MiscGoogleBusinessLocationPlaceActionLinks400Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessLocationPlaceActionLinks400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1MiscGoogleBusinessLocationPlaceActionLinks401Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessLocationPlaceActionLinks401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1MiscGoogleBusinessLocationPlaceActionLinks403Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessLocationPlaceActionLinks403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1MiscGoogleBusinessLocationPlaceActionLinks404Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessLocationPlaceActionLinks404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1MiscGoogleBusinessLocationPlaceActionLinks429Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessLocationPlaceActionLinks429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1MiscGoogleBusinessLocationPlaceActionLinks500Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessLocationPlaceActionLinks500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1MiscGoogleBusinessLocationPlaceActionLinks502Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessLocationPlaceActionLinks502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1MiscGoogleBusinessLocationPlaceActionLinks503Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessLocationPlaceActionLinks503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1MiscGoogleBusinessLocationPlaceActionLinks504Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessLocationPlaceActionLinks504Error1Schema },
      },
    ];
  }

  export type MiscGoogleBusinessDeleteMediaRequest = {
    /** Body */
    body?: ApiV1MiscGoogleBusinessMediaRequest1;
  };

  export class MiscGoogleBusinessDeleteMediaError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1MiscGoogleBusinessMedia400Error1", ApiV1MiscGoogleBusinessMedia400Error1>
      | Declared<"apiV1MiscGoogleBusinessMedia401Error1", ApiV1MiscGoogleBusinessMedia401Error1>
      | Declared<"apiV1MiscGoogleBusinessMedia403Error1", ApiV1MiscGoogleBusinessMedia403Error1>
      | Declared<"apiV1MiscGoogleBusinessMedia404Error1", ApiV1MiscGoogleBusinessMedia404Error1>
      | Declared<"apiV1MiscGoogleBusinessMedia429Error1", ApiV1MiscGoogleBusinessMedia429Error1>
      | Declared<"apiV1MiscGoogleBusinessMedia500Error1", ApiV1MiscGoogleBusinessMedia500Error1>
      | Declared<"apiV1MiscGoogleBusinessMedia502Error1", ApiV1MiscGoogleBusinessMedia502Error1>
      | Declared<"apiV1MiscGoogleBusinessMedia503Error1", ApiV1MiscGoogleBusinessMedia503Error1>
      | Declared<"apiV1MiscGoogleBusinessMedia504Error1", ApiV1MiscGoogleBusinessMedia504Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<MiscGoogleBusinessDeleteMediaError> = [
      {
        on: 400,
        kind: "apiV1MiscGoogleBusinessMedia400Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessMedia400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1MiscGoogleBusinessMedia401Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessMedia401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1MiscGoogleBusinessMedia403Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessMedia403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1MiscGoogleBusinessMedia404Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessMedia404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1MiscGoogleBusinessMedia429Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessMedia429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1MiscGoogleBusinessMedia500Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessMedia500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1MiscGoogleBusinessMedia502Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessMedia502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1MiscGoogleBusinessMedia503Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessMedia503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1MiscGoogleBusinessMedia504Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessMedia504Error1Schema },
      },
    ];
  }

  export type MiscGoogleBusinessDeletePlaceActionLinkRequest = {
    /** Body */
    body?: ApiV1MiscGoogleBusinessLocationPlaceActionLinksRequest2;
  };

  export class MiscGoogleBusinessDeletePlaceActionLinkError extends ApiError {
    declare readonly payload:
      | Declared<
          "apiV1MiscGoogleBusinessLocationPlaceActionLinks400Error1",
          ApiV1MiscGoogleBusinessLocationPlaceActionLinks400Error1
        >
      | Declared<
          "apiV1MiscGoogleBusinessLocationPlaceActionLinks401Error1",
          ApiV1MiscGoogleBusinessLocationPlaceActionLinks401Error1
        >
      | Declared<
          "apiV1MiscGoogleBusinessLocationPlaceActionLinks403Error1",
          ApiV1MiscGoogleBusinessLocationPlaceActionLinks403Error1
        >
      | Declared<
          "apiV1MiscGoogleBusinessLocationPlaceActionLinks404Error1",
          ApiV1MiscGoogleBusinessLocationPlaceActionLinks404Error1
        >
      | Declared<
          "apiV1MiscGoogleBusinessLocationPlaceActionLinks429Error1",
          ApiV1MiscGoogleBusinessLocationPlaceActionLinks429Error1
        >
      | Declared<
          "apiV1MiscGoogleBusinessLocationPlaceActionLinks500Error1",
          ApiV1MiscGoogleBusinessLocationPlaceActionLinks500Error1
        >
      | Declared<
          "apiV1MiscGoogleBusinessLocationPlaceActionLinks502Error1",
          ApiV1MiscGoogleBusinessLocationPlaceActionLinks502Error1
        >
      | Declared<
          "apiV1MiscGoogleBusinessLocationPlaceActionLinks503Error1",
          ApiV1MiscGoogleBusinessLocationPlaceActionLinks503Error1
        >
      | Declared<
          "apiV1MiscGoogleBusinessLocationPlaceActionLinks504Error1",
          ApiV1MiscGoogleBusinessLocationPlaceActionLinks504Error1
        >
      | Undeclared;

    static readonly errors: ErrorDecoders<MiscGoogleBusinessDeletePlaceActionLinkError> = [
      {
        on: 400,
        kind: "apiV1MiscGoogleBusinessLocationPlaceActionLinks400Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessLocationPlaceActionLinks400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1MiscGoogleBusinessLocationPlaceActionLinks401Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessLocationPlaceActionLinks401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1MiscGoogleBusinessLocationPlaceActionLinks403Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessLocationPlaceActionLinks403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1MiscGoogleBusinessLocationPlaceActionLinks404Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessLocationPlaceActionLinks404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1MiscGoogleBusinessLocationPlaceActionLinks429Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessLocationPlaceActionLinks429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1MiscGoogleBusinessLocationPlaceActionLinks500Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessLocationPlaceActionLinks500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1MiscGoogleBusinessLocationPlaceActionLinks502Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessLocationPlaceActionLinks502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1MiscGoogleBusinessLocationPlaceActionLinks503Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessLocationPlaceActionLinks503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1MiscGoogleBusinessLocationPlaceActionLinks504Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessLocationPlaceActionLinks504Error1Schema },
      },
    ];
  }

  export type MiscGoogleBusinessDeletePostRequest = {
    /** Body */
    body?: ApiV1MiscGoogleBusinessPostRequest;
  };

  export class MiscGoogleBusinessDeletePostError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1MiscGoogleBusinessPost400Error1", ApiV1MiscGoogleBusinessPost400Error1>
      | Declared<"apiV1MiscGoogleBusinessPost401Error1", ApiV1MiscGoogleBusinessPost401Error1>
      | Declared<"apiV1MiscGoogleBusinessPost403Error1", ApiV1MiscGoogleBusinessPost403Error1>
      | Declared<"apiV1MiscGoogleBusinessPost404Error1", ApiV1MiscGoogleBusinessPost404Error1>
      | Declared<"apiV1MiscGoogleBusinessPost429Error1", ApiV1MiscGoogleBusinessPost429Error1>
      | Declared<"apiV1MiscGoogleBusinessPost500Error1", ApiV1MiscGoogleBusinessPost500Error1>
      | Declared<"apiV1MiscGoogleBusinessPost502Error1", ApiV1MiscGoogleBusinessPost502Error1>
      | Declared<"apiV1MiscGoogleBusinessPost503Error1", ApiV1MiscGoogleBusinessPost503Error1>
      | Declared<"apiV1MiscGoogleBusinessPost504Error1", ApiV1MiscGoogleBusinessPost504Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<MiscGoogleBusinessDeletePostError> = [
      {
        on: 400,
        kind: "apiV1MiscGoogleBusinessPost400Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessPost400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1MiscGoogleBusinessPost401Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessPost401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1MiscGoogleBusinessPost403Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessPost403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1MiscGoogleBusinessPost404Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessPost404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1MiscGoogleBusinessPost429Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessPost429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1MiscGoogleBusinessPost500Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessPost500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1MiscGoogleBusinessPost502Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessPost502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1MiscGoogleBusinessPost503Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessPost503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1MiscGoogleBusinessPost504Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessPost504Error1Schema },
      },
    ];
  }

  export type MiscGoogleBusinessDeleteReviewReplyRequest = {
    reviewId: string;
    /** Body */
    body?: ApiV1MiscGoogleBusinessReviewsReplyRequest1;
  };

  export class MiscGoogleBusinessDeleteReviewReplyError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1MiscGoogleBusinessReviewsReply400Error1", ApiV1MiscGoogleBusinessReviewsReply400Error1>
      | Declared<"apiV1MiscGoogleBusinessReviewsReply401Error1", ApiV1MiscGoogleBusinessReviewsReply401Error1>
      | Declared<"apiV1MiscGoogleBusinessReviewsReply403Error1", ApiV1MiscGoogleBusinessReviewsReply403Error1>
      | Declared<"apiV1MiscGoogleBusinessReviewsReply404Error1", ApiV1MiscGoogleBusinessReviewsReply404Error1>
      | Declared<"apiV1MiscGoogleBusinessReviewsReply429Error1", ApiV1MiscGoogleBusinessReviewsReply429Error1>
      | Declared<"apiV1MiscGoogleBusinessReviewsReply500Error1", ApiV1MiscGoogleBusinessReviewsReply500Error1>
      | Declared<"apiV1MiscGoogleBusinessReviewsReply502Error1", ApiV1MiscGoogleBusinessReviewsReply502Error1>
      | Declared<"apiV1MiscGoogleBusinessReviewsReply503Error1", ApiV1MiscGoogleBusinessReviewsReply503Error1>
      | Declared<"apiV1MiscGoogleBusinessReviewsReply504Error1", ApiV1MiscGoogleBusinessReviewsReply504Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<MiscGoogleBusinessDeleteReviewReplyError> = [
      {
        on: 400,
        kind: "apiV1MiscGoogleBusinessReviewsReply400Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessReviewsReply400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1MiscGoogleBusinessReviewsReply401Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessReviewsReply401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1MiscGoogleBusinessReviewsReply403Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessReviewsReply403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1MiscGoogleBusinessReviewsReply404Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessReviewsReply404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1MiscGoogleBusinessReviewsReply429Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessReviewsReply429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1MiscGoogleBusinessReviewsReply500Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessReviewsReply500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1MiscGoogleBusinessReviewsReply502Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessReviewsReply502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1MiscGoogleBusinessReviewsReply503Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessReviewsReply503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1MiscGoogleBusinessReviewsReply504Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessReviewsReply504Error1Schema },
      },
    ];
  }

  export type MiscGoogleBusinessGetAttributesRequest = {
    teamId: string;
  };

  export class MiscGoogleBusinessGetAttributesError extends ApiError {
    declare readonly payload:
      | Declared<
          "apiV1MiscGoogleBusinessLocationAttributes400Error1",
          ApiV1MiscGoogleBusinessLocationAttributes400Error1
        >
      | Declared<
          "apiV1MiscGoogleBusinessLocationAttributes401Error1",
          ApiV1MiscGoogleBusinessLocationAttributes401Error1
        >
      | Declared<
          "apiV1MiscGoogleBusinessLocationAttributes403Error1",
          ApiV1MiscGoogleBusinessLocationAttributes403Error1
        >
      | Declared<
          "apiV1MiscGoogleBusinessLocationAttributes404Error1",
          ApiV1MiscGoogleBusinessLocationAttributes404Error1
        >
      | Declared<
          "apiV1MiscGoogleBusinessLocationAttributes429Error1",
          ApiV1MiscGoogleBusinessLocationAttributes429Error1
        >
      | Declared<
          "apiV1MiscGoogleBusinessLocationAttributes500Error1",
          ApiV1MiscGoogleBusinessLocationAttributes500Error1
        >
      | Declared<
          "apiV1MiscGoogleBusinessLocationAttributes502Error1",
          ApiV1MiscGoogleBusinessLocationAttributes502Error1
        >
      | Declared<
          "apiV1MiscGoogleBusinessLocationAttributes503Error1",
          ApiV1MiscGoogleBusinessLocationAttributes503Error1
        >
      | Declared<
          "apiV1MiscGoogleBusinessLocationAttributes504Error1",
          ApiV1MiscGoogleBusinessLocationAttributes504Error1
        >
      | Undeclared;

    static readonly errors: ErrorDecoders<MiscGoogleBusinessGetAttributesError> = [
      {
        on: 400,
        kind: "apiV1MiscGoogleBusinessLocationAttributes400Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessLocationAttributes400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1MiscGoogleBusinessLocationAttributes401Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessLocationAttributes401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1MiscGoogleBusinessLocationAttributes403Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessLocationAttributes403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1MiscGoogleBusinessLocationAttributes404Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessLocationAttributes404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1MiscGoogleBusinessLocationAttributes429Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessLocationAttributes429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1MiscGoogleBusinessLocationAttributes500Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessLocationAttributes500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1MiscGoogleBusinessLocationAttributes502Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessLocationAttributes502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1MiscGoogleBusinessLocationAttributes503Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessLocationAttributes503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1MiscGoogleBusinessLocationAttributes504Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessLocationAttributes504Error1Schema },
      },
    ];
  }

  export type MiscGoogleBusinessGetFoodMenusRequest = {
    teamId: string;
    fields?: Field3[] | null;
  };

  export const miscGoogleBusinessGetFoodMenusRequestSchema: Schema<MiscGoogleBusinessGetFoodMenusRequest> =
    s.lazySchema(() =>
      s.object<MiscGoogleBusinessGetFoodMenusRequest>({
        teamId: s.string(),
        fields: s.optionalNullable(s.array(s.lazy(() => field3Schema)).check(s.minLength(1), s.maxLength(2))),
      }),
    );

  export class MiscGoogleBusinessGetFoodMenusError extends ApiError {
    declare readonly payload:
      | Declared<
          "apiV1MiscGoogleBusinessLocationFoodMenus400Error1",
          ApiV1MiscGoogleBusinessLocationFoodMenus400Error1
        >
      | Declared<
          "apiV1MiscGoogleBusinessLocationFoodMenus401Error1",
          ApiV1MiscGoogleBusinessLocationFoodMenus401Error1
        >
      | Declared<
          "apiV1MiscGoogleBusinessLocationFoodMenus403Error1",
          ApiV1MiscGoogleBusinessLocationFoodMenus403Error1
        >
      | Declared<
          "apiV1MiscGoogleBusinessLocationFoodMenus404Error1",
          ApiV1MiscGoogleBusinessLocationFoodMenus404Error1
        >
      | Declared<
          "apiV1MiscGoogleBusinessLocationFoodMenus429Error1",
          ApiV1MiscGoogleBusinessLocationFoodMenus429Error1
        >
      | Declared<
          "apiV1MiscGoogleBusinessLocationFoodMenus500Error1",
          ApiV1MiscGoogleBusinessLocationFoodMenus500Error1
        >
      | Declared<
          "apiV1MiscGoogleBusinessLocationFoodMenus502Error1",
          ApiV1MiscGoogleBusinessLocationFoodMenus502Error1
        >
      | Declared<
          "apiV1MiscGoogleBusinessLocationFoodMenus503Error1",
          ApiV1MiscGoogleBusinessLocationFoodMenus503Error1
        >
      | Declared<
          "apiV1MiscGoogleBusinessLocationFoodMenus504Error1",
          ApiV1MiscGoogleBusinessLocationFoodMenus504Error1
        >
      | Undeclared;

    static readonly errors: ErrorDecoders<MiscGoogleBusinessGetFoodMenusError> = [
      {
        on: 400,
        kind: "apiV1MiscGoogleBusinessLocationFoodMenus400Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessLocationFoodMenus400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1MiscGoogleBusinessLocationFoodMenus401Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessLocationFoodMenus401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1MiscGoogleBusinessLocationFoodMenus403Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessLocationFoodMenus403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1MiscGoogleBusinessLocationFoodMenus404Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessLocationFoodMenus404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1MiscGoogleBusinessLocationFoodMenus429Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessLocationFoodMenus429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1MiscGoogleBusinessLocationFoodMenus500Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessLocationFoodMenus500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1MiscGoogleBusinessLocationFoodMenus502Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessLocationFoodMenus502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1MiscGoogleBusinessLocationFoodMenus503Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessLocationFoodMenus503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1MiscGoogleBusinessLocationFoodMenus504Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessLocationFoodMenus504Error1Schema },
      },
    ];
  }

  export type MiscGoogleBusinessGetLocationRequest = {
    teamId: string;
    fields?: FieldBundleSocialMiscApi[] | null;
  };

  export const miscGoogleBusinessGetLocationRequestSchema: Schema<MiscGoogleBusinessGetLocationRequest> =
    s.lazySchema(() =>
      s.object<MiscGoogleBusinessGetLocationRequest>({
        teamId: s.string(),
        fields: s.optionalNullable(
          s.array(s.lazy(() => fieldBundleSocialMiscApiSchema)).check(s.minLength(1), s.maxLength(20)),
        ),
      }),
    );

  export class MiscGoogleBusinessGetLocationError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1MiscGoogleBusinessLocation400Error1", ApiV1MiscGoogleBusinessLocation400Error1>
      | Declared<"apiV1MiscGoogleBusinessLocation401Error1", ApiV1MiscGoogleBusinessLocation401Error1>
      | Declared<"apiV1MiscGoogleBusinessLocation403Error1", ApiV1MiscGoogleBusinessLocation403Error1>
      | Declared<"apiV1MiscGoogleBusinessLocation404Error1", ApiV1MiscGoogleBusinessLocation404Error1>
      | Declared<"apiV1MiscGoogleBusinessLocation429Error1", ApiV1MiscGoogleBusinessLocation429Error1>
      | Declared<"apiV1MiscGoogleBusinessLocation500Error1", ApiV1MiscGoogleBusinessLocation500Error1>
      | Declared<"apiV1MiscGoogleBusinessLocation502Error1", ApiV1MiscGoogleBusinessLocation502Error1>
      | Declared<"apiV1MiscGoogleBusinessLocation503Error1", ApiV1MiscGoogleBusinessLocation503Error1>
      | Declared<"apiV1MiscGoogleBusinessLocation504Error1", ApiV1MiscGoogleBusinessLocation504Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<MiscGoogleBusinessGetLocationError> = [
      {
        on: 400,
        kind: "apiV1MiscGoogleBusinessLocation400Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessLocation400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1MiscGoogleBusinessLocation401Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessLocation401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1MiscGoogleBusinessLocation403Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessLocation403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1MiscGoogleBusinessLocation404Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessLocation404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1MiscGoogleBusinessLocation429Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessLocation429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1MiscGoogleBusinessLocation500Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessLocation500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1MiscGoogleBusinessLocation502Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessLocation502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1MiscGoogleBusinessLocation503Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessLocation503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1MiscGoogleBusinessLocation504Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessLocation504Error1Schema },
      },
    ];
  }

  export type MiscGoogleBusinessGetReviewByIdRequest = {
    reviewId: string;
    teamId: string;
  };

  export class MiscGoogleBusinessGetReviewByIdError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1MiscGoogleBusinessReviews400Error1", ApiV1MiscGoogleBusinessReviews400Error1>
      | Declared<"apiV1MiscGoogleBusinessReviews401Error1", ApiV1MiscGoogleBusinessReviews401Error1>
      | Declared<"apiV1MiscGoogleBusinessReviews403Error1", ApiV1MiscGoogleBusinessReviews403Error1>
      | Declared<"apiV1MiscGoogleBusinessReviews404Error1", ApiV1MiscGoogleBusinessReviews404Error1>
      | Declared<"apiV1MiscGoogleBusinessReviews429Error1", ApiV1MiscGoogleBusinessReviews429Error1>
      | Declared<"apiV1MiscGoogleBusinessReviews500Error1", ApiV1MiscGoogleBusinessReviews500Error1>
      | Declared<"apiV1MiscGoogleBusinessReviews502Error1", ApiV1MiscGoogleBusinessReviews502Error1>
      | Declared<"apiV1MiscGoogleBusinessReviews503Error1", ApiV1MiscGoogleBusinessReviews503Error1>
      | Declared<"apiV1MiscGoogleBusinessReviews504Error1", ApiV1MiscGoogleBusinessReviews504Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<MiscGoogleBusinessGetReviewByIdError> = [
      {
        on: 400,
        kind: "apiV1MiscGoogleBusinessReviews400Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessReviews400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1MiscGoogleBusinessReviews401Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessReviews401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1MiscGoogleBusinessReviews403Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessReviews403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1MiscGoogleBusinessReviews404Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessReviews404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1MiscGoogleBusinessReviews429Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessReviews429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1MiscGoogleBusinessReviews500Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessReviews500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1MiscGoogleBusinessReviews502Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessReviews502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1MiscGoogleBusinessReviews503Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessReviews503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1MiscGoogleBusinessReviews504Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessReviews504Error1Schema },
      },
    ];
  }

  export type MiscGoogleBusinessGetReviewImportByIdRequest = {
    importId: string;
  };

  export class MiscGoogleBusinessGetReviewImportByIdError extends ApiError {
    declare readonly payload:
      | Declared<
          "apiV1MiscGoogleBusinessReviewsImport400Error1",
          ApiV1MiscGoogleBusinessReviewsImport400Error1
        >
      | Declared<
          "apiV1MiscGoogleBusinessReviewsImport401Error1",
          ApiV1MiscGoogleBusinessReviewsImport401Error1
        >
      | Declared<
          "apiV1MiscGoogleBusinessReviewsImport403Error1",
          ApiV1MiscGoogleBusinessReviewsImport403Error1
        >
      | Declared<
          "apiV1MiscGoogleBusinessReviewsImport404Error1",
          ApiV1MiscGoogleBusinessReviewsImport404Error1
        >
      | Declared<
          "apiV1MiscGoogleBusinessReviewsImport429Error1",
          ApiV1MiscGoogleBusinessReviewsImport429Error1
        >
      | Declared<
          "apiV1MiscGoogleBusinessReviewsImport500Error1",
          ApiV1MiscGoogleBusinessReviewsImport500Error1
        >
      | Declared<
          "apiV1MiscGoogleBusinessReviewsImport502Error1",
          ApiV1MiscGoogleBusinessReviewsImport502Error1
        >
      | Declared<
          "apiV1MiscGoogleBusinessReviewsImport503Error1",
          ApiV1MiscGoogleBusinessReviewsImport503Error1
        >
      | Declared<
          "apiV1MiscGoogleBusinessReviewsImport504Error1",
          ApiV1MiscGoogleBusinessReviewsImport504Error1
        >
      | Undeclared;

    static readonly errors: ErrorDecoders<MiscGoogleBusinessGetReviewImportByIdError> = [
      {
        on: 400,
        kind: "apiV1MiscGoogleBusinessReviewsImport400Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessReviewsImport400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1MiscGoogleBusinessReviewsImport401Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessReviewsImport401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1MiscGoogleBusinessReviewsImport403Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessReviewsImport403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1MiscGoogleBusinessReviewsImport404Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessReviewsImport404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1MiscGoogleBusinessReviewsImport429Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessReviewsImport429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1MiscGoogleBusinessReviewsImport500Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessReviewsImport500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1MiscGoogleBusinessReviewsImport502Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessReviewsImport502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1MiscGoogleBusinessReviewsImport503Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessReviewsImport503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1MiscGoogleBusinessReviewsImport504Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessReviewsImport504Error1Schema },
      },
    ];
  }

  export type MiscGoogleBusinessGetReviewImportStatusRequest = {
    teamId: string;
  };

  export class MiscGoogleBusinessGetReviewImportStatusError extends ApiError {
    declare readonly payload:
      | Declared<
          "apiV1MiscGoogleBusinessReviewsImport400Error1",
          ApiV1MiscGoogleBusinessReviewsImport400Error1
        >
      | Declared<
          "apiV1MiscGoogleBusinessReviewsImport401Error1",
          ApiV1MiscGoogleBusinessReviewsImport401Error1
        >
      | Declared<
          "apiV1MiscGoogleBusinessReviewsImport403Error1",
          ApiV1MiscGoogleBusinessReviewsImport403Error1
        >
      | Declared<
          "apiV1MiscGoogleBusinessReviewsImport404Error1",
          ApiV1MiscGoogleBusinessReviewsImport404Error1
        >
      | Declared<
          "apiV1MiscGoogleBusinessReviewsImport429Error1",
          ApiV1MiscGoogleBusinessReviewsImport429Error1
        >
      | Declared<
          "apiV1MiscGoogleBusinessReviewsImport500Error1",
          ApiV1MiscGoogleBusinessReviewsImport500Error1
        >
      | Declared<
          "apiV1MiscGoogleBusinessReviewsImport502Error1",
          ApiV1MiscGoogleBusinessReviewsImport502Error1
        >
      | Declared<
          "apiV1MiscGoogleBusinessReviewsImport503Error1",
          ApiV1MiscGoogleBusinessReviewsImport503Error1
        >
      | Declared<
          "apiV1MiscGoogleBusinessReviewsImport504Error1",
          ApiV1MiscGoogleBusinessReviewsImport504Error1
        >
      | Undeclared;

    static readonly errors: ErrorDecoders<MiscGoogleBusinessGetReviewImportStatusError> = [
      {
        on: 400,
        kind: "apiV1MiscGoogleBusinessReviewsImport400Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessReviewsImport400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1MiscGoogleBusinessReviewsImport401Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessReviewsImport401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1MiscGoogleBusinessReviewsImport403Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessReviewsImport403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1MiscGoogleBusinessReviewsImport404Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessReviewsImport404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1MiscGoogleBusinessReviewsImport429Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessReviewsImport429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1MiscGoogleBusinessReviewsImport500Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessReviewsImport500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1MiscGoogleBusinessReviewsImport502Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessReviewsImport502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1MiscGoogleBusinessReviewsImport503Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessReviewsImport503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1MiscGoogleBusinessReviewsImport504Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessReviewsImport504Error1Schema },
      },
    ];
  }

  export type MiscGoogleBusinessGetReviewsRequest = {
    teamId: string;
    /** @default 50 */
    limit?: number;
    /** @default 0 */
    offset?: number | null;
  };

  export const miscGoogleBusinessGetReviewsRequestSchema: Schema<MiscGoogleBusinessGetReviewsRequest> =
    s.lazySchema(() =>
      s.object<MiscGoogleBusinessGetReviewsRequest>({
        teamId: s.string(),
        limit: s.defaulted(s.float64().check(s.gte(1), s.lte(100)), 50),
        offset: s.defaulted(s.nullable(s.float64().check(s.gte(0))), 0),
      }),
    );

  export class MiscGoogleBusinessGetReviewsError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1MiscGoogleBusinessReviews400Error1", ApiV1MiscGoogleBusinessReviews400Error1>
      | Declared<"apiV1MiscGoogleBusinessReviews401Error1", ApiV1MiscGoogleBusinessReviews401Error1>
      | Declared<"apiV1MiscGoogleBusinessReviews403Error1", ApiV1MiscGoogleBusinessReviews403Error1>
      | Declared<"apiV1MiscGoogleBusinessReviews404Error1", ApiV1MiscGoogleBusinessReviews404Error1>
      | Declared<"apiV1MiscGoogleBusinessReviews429Error1", ApiV1MiscGoogleBusinessReviews429Error1>
      | Declared<"apiV1MiscGoogleBusinessReviews500Error1", ApiV1MiscGoogleBusinessReviews500Error1>
      | Declared<"apiV1MiscGoogleBusinessReviews502Error1", ApiV1MiscGoogleBusinessReviews502Error1>
      | Declared<"apiV1MiscGoogleBusinessReviews503Error1", ApiV1MiscGoogleBusinessReviews503Error1>
      | Declared<"apiV1MiscGoogleBusinessReviews504Error1", ApiV1MiscGoogleBusinessReviews504Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<MiscGoogleBusinessGetReviewsError> = [
      {
        on: 400,
        kind: "apiV1MiscGoogleBusinessReviews400Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessReviews400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1MiscGoogleBusinessReviews401Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessReviews401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1MiscGoogleBusinessReviews403Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessReviews403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1MiscGoogleBusinessReviews404Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessReviews404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1MiscGoogleBusinessReviews429Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessReviews429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1MiscGoogleBusinessReviews500Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessReviews500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1MiscGoogleBusinessReviews502Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessReviews502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1MiscGoogleBusinessReviews503Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessReviews503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1MiscGoogleBusinessReviews504Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessReviews504Error1Schema },
      },
    ];
  }

  export type MiscGoogleBusinessGetServiceListRequest = {
    teamId: string;
  };

  export class MiscGoogleBusinessGetServiceListError extends ApiError {
    declare readonly payload:
      | Declared<
          "apiV1MiscGoogleBusinessLocationServiceList400Error1",
          ApiV1MiscGoogleBusinessLocationServiceList400Error1
        >
      | Declared<
          "apiV1MiscGoogleBusinessLocationServiceList401Error1",
          ApiV1MiscGoogleBusinessLocationServiceList401Error1
        >
      | Declared<
          "apiV1MiscGoogleBusinessLocationServiceList403Error1",
          ApiV1MiscGoogleBusinessLocationServiceList403Error1
        >
      | Declared<
          "apiV1MiscGoogleBusinessLocationServiceList404Error1",
          ApiV1MiscGoogleBusinessLocationServiceList404Error1
        >
      | Declared<
          "apiV1MiscGoogleBusinessLocationServiceList429Error1",
          ApiV1MiscGoogleBusinessLocationServiceList429Error1
        >
      | Declared<
          "apiV1MiscGoogleBusinessLocationServiceList500Error1",
          ApiV1MiscGoogleBusinessLocationServiceList500Error1
        >
      | Declared<
          "apiV1MiscGoogleBusinessLocationServiceList502Error1",
          ApiV1MiscGoogleBusinessLocationServiceList502Error1
        >
      | Declared<
          "apiV1MiscGoogleBusinessLocationServiceList503Error1",
          ApiV1MiscGoogleBusinessLocationServiceList503Error1
        >
      | Declared<
          "apiV1MiscGoogleBusinessLocationServiceList504Error1",
          ApiV1MiscGoogleBusinessLocationServiceList504Error1
        >
      | Undeclared;

    static readonly errors: ErrorDecoders<MiscGoogleBusinessGetServiceListError> = [
      {
        on: 400,
        kind: "apiV1MiscGoogleBusinessLocationServiceList400Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessLocationServiceList400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1MiscGoogleBusinessLocationServiceList401Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessLocationServiceList401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1MiscGoogleBusinessLocationServiceList403Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessLocationServiceList403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1MiscGoogleBusinessLocationServiceList404Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessLocationServiceList404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1MiscGoogleBusinessLocationServiceList429Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessLocationServiceList429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1MiscGoogleBusinessLocationServiceList500Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessLocationServiceList500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1MiscGoogleBusinessLocationServiceList502Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessLocationServiceList502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1MiscGoogleBusinessLocationServiceList503Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessLocationServiceList503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1MiscGoogleBusinessLocationServiceList504Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessLocationServiceList504Error1Schema },
      },
    ];
  }

  export type MiscGoogleBusinessImportReviewsRequest = {
    /** Body */
    body?: ApiV1MiscGoogleBusinessReviewsImportRequest;
  };

  export class MiscGoogleBusinessImportReviewsError extends ApiError {
    declare readonly payload:
      | Declared<
          "apiV1MiscGoogleBusinessReviewsImport400Error1",
          ApiV1MiscGoogleBusinessReviewsImport400Error1
        >
      | Declared<
          "apiV1MiscGoogleBusinessReviewsImport401Error1",
          ApiV1MiscGoogleBusinessReviewsImport401Error1
        >
      | Declared<
          "apiV1MiscGoogleBusinessReviewsImport403Error1",
          ApiV1MiscGoogleBusinessReviewsImport403Error1
        >
      | Declared<
          "apiV1MiscGoogleBusinessReviewsImport404Error1",
          ApiV1MiscGoogleBusinessReviewsImport404Error1
        >
      | Declared<
          "apiV1MiscGoogleBusinessReviewsImport409Error1",
          ApiV1MiscGoogleBusinessReviewsImport409Error1
        >
      | Declared<
          "apiV1MiscGoogleBusinessReviewsImport429Error1",
          ApiV1MiscGoogleBusinessReviewsImport429Error1
        >
      | Declared<
          "apiV1MiscGoogleBusinessReviewsImport500Error1",
          ApiV1MiscGoogleBusinessReviewsImport500Error1
        >
      | Declared<
          "apiV1MiscGoogleBusinessReviewsImport502Error1",
          ApiV1MiscGoogleBusinessReviewsImport502Error1
        >
      | Declared<
          "apiV1MiscGoogleBusinessReviewsImport503Error1",
          ApiV1MiscGoogleBusinessReviewsImport503Error1
        >
      | Declared<
          "apiV1MiscGoogleBusinessReviewsImport504Error1",
          ApiV1MiscGoogleBusinessReviewsImport504Error1
        >
      | Undeclared;

    static readonly errors: ErrorDecoders<MiscGoogleBusinessImportReviewsError> = [
      {
        on: 400,
        kind: "apiV1MiscGoogleBusinessReviewsImport400Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessReviewsImport400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1MiscGoogleBusinessReviewsImport401Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessReviewsImport401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1MiscGoogleBusinessReviewsImport403Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessReviewsImport403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1MiscGoogleBusinessReviewsImport404Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessReviewsImport404Error1Schema },
      },
      {
        on: 409,
        kind: "apiV1MiscGoogleBusinessReviewsImport409Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessReviewsImport409Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1MiscGoogleBusinessReviewsImport429Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessReviewsImport429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1MiscGoogleBusinessReviewsImport500Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessReviewsImport500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1MiscGoogleBusinessReviewsImport502Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessReviewsImport502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1MiscGoogleBusinessReviewsImport503Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessReviewsImport503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1MiscGoogleBusinessReviewsImport504Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessReviewsImport504Error1Schema },
      },
    ];
  }

  export type MiscGoogleBusinessListAvailableAttributesRequest = {
    teamId: string;
    languageCode?: string;
    regionCode?: string;
    pageSize?: number;
    pageToken?: string;
  };

  export const miscGoogleBusinessListAvailableAttributesRequestSchema: Schema<MiscGoogleBusinessListAvailableAttributesRequest> =
    s.lazySchema(() =>
      s.object<MiscGoogleBusinessListAvailableAttributesRequest>({
        teamId: s.string(),
        languageCode: s.optional(s.string()),
        regionCode: s.optional(s.string().check(s.pattern("^[A-Za-z]{2}$"))),
        pageSize: s.optional(s.int().check(s.gte(1), s.lte(200))),
        pageToken: s.optional(s.string()),
      }),
    );

  export class MiscGoogleBusinessListAvailableAttributesError extends ApiError {
    declare readonly payload:
      | Declared<
          "apiV1MiscGoogleBusinessLocationAttributesAvailable400Error1",
          ApiV1MiscGoogleBusinessLocationAttributesAvailable400Error1
        >
      | Declared<
          "apiV1MiscGoogleBusinessLocationAttributesAvailable401Error1",
          ApiV1MiscGoogleBusinessLocationAttributesAvailable401Error1
        >
      | Declared<
          "apiV1MiscGoogleBusinessLocationAttributesAvailable403Error1",
          ApiV1MiscGoogleBusinessLocationAttributesAvailable403Error1
        >
      | Declared<
          "apiV1MiscGoogleBusinessLocationAttributesAvailable404Error1",
          ApiV1MiscGoogleBusinessLocationAttributesAvailable404Error1
        >
      | Declared<
          "apiV1MiscGoogleBusinessLocationAttributesAvailable429Error1",
          ApiV1MiscGoogleBusinessLocationAttributesAvailable429Error1
        >
      | Declared<
          "apiV1MiscGoogleBusinessLocationAttributesAvailable500Error1",
          ApiV1MiscGoogleBusinessLocationAttributesAvailable500Error1
        >
      | Declared<
          "apiV1MiscGoogleBusinessLocationAttributesAvailable502Error1",
          ApiV1MiscGoogleBusinessLocationAttributesAvailable502Error1
        >
      | Declared<
          "apiV1MiscGoogleBusinessLocationAttributesAvailable503Error1",
          ApiV1MiscGoogleBusinessLocationAttributesAvailable503Error1
        >
      | Declared<
          "apiV1MiscGoogleBusinessLocationAttributesAvailable504Error1",
          ApiV1MiscGoogleBusinessLocationAttributesAvailable504Error1
        >
      | Undeclared;

    static readonly errors: ErrorDecoders<MiscGoogleBusinessListAvailableAttributesError> = [
      {
        on: 400,
        kind: "apiV1MiscGoogleBusinessLocationAttributesAvailable400Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessLocationAttributesAvailable400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1MiscGoogleBusinessLocationAttributesAvailable401Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessLocationAttributesAvailable401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1MiscGoogleBusinessLocationAttributesAvailable403Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessLocationAttributesAvailable403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1MiscGoogleBusinessLocationAttributesAvailable404Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessLocationAttributesAvailable404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1MiscGoogleBusinessLocationAttributesAvailable429Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessLocationAttributesAvailable429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1MiscGoogleBusinessLocationAttributesAvailable500Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessLocationAttributesAvailable500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1MiscGoogleBusinessLocationAttributesAvailable502Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessLocationAttributesAvailable502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1MiscGoogleBusinessLocationAttributesAvailable503Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessLocationAttributesAvailable503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1MiscGoogleBusinessLocationAttributesAvailable504Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessLocationAttributesAvailable504Error1Schema },
      },
    ];
  }

  export type MiscGoogleBusinessListCategoriesRequest = {
    teamId: string;
    regionCode: string;
    languageCode: string;
    names?: string[];
    filter?: string;
    /** @default 50 */
    pageSize?: number;
    pageToken?: string;
    /** @default View.Basic */
    view?: View;
  };

  export const miscGoogleBusinessListCategoriesRequestSchema: Schema<MiscGoogleBusinessListCategoriesRequest> =
    s.lazySchema(() =>
      s.object<MiscGoogleBusinessListCategoriesRequest>({
        teamId: s.string(),
        regionCode: s.string().check(s.minLength(2), s.maxLength(2)),
        languageCode: s.string(),
        names: s.optional(s.array(s.string()).check(s.minLength(1), s.maxLength(100))),
        filter: s.optional(s.string()),
        pageSize: s.defaulted(s.int().check(s.gte(50), s.lte(50)), 50),
        pageToken: s.optional(s.string()),
        view: s.defaulted(viewSchema, View.Basic),
      }),
    );

  export class MiscGoogleBusinessListCategoriesError extends ApiError {
    declare readonly payload:
      | Declared<
          "apiV1MiscGoogleBusinessLocationCategoriesAvailable400Error1",
          ApiV1MiscGoogleBusinessLocationCategoriesAvailable400Error1
        >
      | Declared<
          "apiV1MiscGoogleBusinessLocationCategoriesAvailable401Error1",
          ApiV1MiscGoogleBusinessLocationCategoriesAvailable401Error1
        >
      | Declared<
          "apiV1MiscGoogleBusinessLocationCategoriesAvailable403Error1",
          ApiV1MiscGoogleBusinessLocationCategoriesAvailable403Error1
        >
      | Declared<
          "apiV1MiscGoogleBusinessLocationCategoriesAvailable404Error1",
          ApiV1MiscGoogleBusinessLocationCategoriesAvailable404Error1
        >
      | Declared<
          "apiV1MiscGoogleBusinessLocationCategoriesAvailable429Error1",
          ApiV1MiscGoogleBusinessLocationCategoriesAvailable429Error1
        >
      | Declared<
          "apiV1MiscGoogleBusinessLocationCategoriesAvailable500Error1",
          ApiV1MiscGoogleBusinessLocationCategoriesAvailable500Error1
        >
      | Declared<
          "apiV1MiscGoogleBusinessLocationCategoriesAvailable502Error1",
          ApiV1MiscGoogleBusinessLocationCategoriesAvailable502Error1
        >
      | Declared<
          "apiV1MiscGoogleBusinessLocationCategoriesAvailable503Error1",
          ApiV1MiscGoogleBusinessLocationCategoriesAvailable503Error1
        >
      | Declared<
          "apiV1MiscGoogleBusinessLocationCategoriesAvailable504Error1",
          ApiV1MiscGoogleBusinessLocationCategoriesAvailable504Error1
        >
      | Undeclared;

    static readonly errors: ErrorDecoders<MiscGoogleBusinessListCategoriesError> = [
      {
        on: 400,
        kind: "apiV1MiscGoogleBusinessLocationCategoriesAvailable400Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessLocationCategoriesAvailable400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1MiscGoogleBusinessLocationCategoriesAvailable401Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessLocationCategoriesAvailable401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1MiscGoogleBusinessLocationCategoriesAvailable403Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessLocationCategoriesAvailable403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1MiscGoogleBusinessLocationCategoriesAvailable404Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessLocationCategoriesAvailable404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1MiscGoogleBusinessLocationCategoriesAvailable429Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessLocationCategoriesAvailable429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1MiscGoogleBusinessLocationCategoriesAvailable500Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessLocationCategoriesAvailable500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1MiscGoogleBusinessLocationCategoriesAvailable502Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessLocationCategoriesAvailable502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1MiscGoogleBusinessLocationCategoriesAvailable503Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessLocationCategoriesAvailable503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1MiscGoogleBusinessLocationCategoriesAvailable504Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessLocationCategoriesAvailable504Error1Schema },
      },
    ];
  }

  export type MiscGoogleBusinessListMediaRequest = {
    teamId: string;
    pageSize?: number;
    pageToken?: string;
  };

  export const miscGoogleBusinessListMediaRequestSchema: Schema<MiscGoogleBusinessListMediaRequest> =
    s.lazySchema(() =>
      s.object<MiscGoogleBusinessListMediaRequest>({
        teamId: s.string(),
        pageSize: s.optional(s.int().check(s.gte(1), s.lte(250))),
        pageToken: s.optional(s.string()),
      }),
    );

  export class MiscGoogleBusinessListMediaError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1MiscGoogleBusinessMedia400Error1", ApiV1MiscGoogleBusinessMedia400Error1>
      | Declared<"apiV1MiscGoogleBusinessMedia401Error1", ApiV1MiscGoogleBusinessMedia401Error1>
      | Declared<"apiV1MiscGoogleBusinessMedia403Error1", ApiV1MiscGoogleBusinessMedia403Error1>
      | Declared<"apiV1MiscGoogleBusinessMedia404Error1", ApiV1MiscGoogleBusinessMedia404Error1>
      | Declared<"apiV1MiscGoogleBusinessMedia429Error1", ApiV1MiscGoogleBusinessMedia429Error1>
      | Declared<"apiV1MiscGoogleBusinessMedia500Error1", ApiV1MiscGoogleBusinessMedia500Error1>
      | Declared<"apiV1MiscGoogleBusinessMedia502Error1", ApiV1MiscGoogleBusinessMedia502Error1>
      | Declared<"apiV1MiscGoogleBusinessMedia503Error1", ApiV1MiscGoogleBusinessMedia503Error1>
      | Declared<"apiV1MiscGoogleBusinessMedia504Error1", ApiV1MiscGoogleBusinessMedia504Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<MiscGoogleBusinessListMediaError> = [
      {
        on: 400,
        kind: "apiV1MiscGoogleBusinessMedia400Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessMedia400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1MiscGoogleBusinessMedia401Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessMedia401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1MiscGoogleBusinessMedia403Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessMedia403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1MiscGoogleBusinessMedia404Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessMedia404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1MiscGoogleBusinessMedia429Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessMedia429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1MiscGoogleBusinessMedia500Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessMedia500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1MiscGoogleBusinessMedia502Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessMedia502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1MiscGoogleBusinessMedia503Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessMedia503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1MiscGoogleBusinessMedia504Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessMedia504Error1Schema },
      },
    ];
  }

  export type MiscGoogleBusinessListPlaceActionLinksRequest = {
    teamId: string;
    pageSize?: number;
    pageToken?: string;
  };

  export const miscGoogleBusinessListPlaceActionLinksRequestSchema: Schema<MiscGoogleBusinessListPlaceActionLinksRequest> =
    s.lazySchema(() =>
      s.object<MiscGoogleBusinessListPlaceActionLinksRequest>({
        teamId: s.string(),
        pageSize: s.optional(s.int().check(s.gte(1), s.lte(100))),
        pageToken: s.optional(s.string()),
      }),
    );

  export class MiscGoogleBusinessListPlaceActionLinksError extends ApiError {
    declare readonly payload:
      | Declared<
          "apiV1MiscGoogleBusinessLocationPlaceActionLinks400Error1",
          ApiV1MiscGoogleBusinessLocationPlaceActionLinks400Error1
        >
      | Declared<
          "apiV1MiscGoogleBusinessLocationPlaceActionLinks401Error1",
          ApiV1MiscGoogleBusinessLocationPlaceActionLinks401Error1
        >
      | Declared<
          "apiV1MiscGoogleBusinessLocationPlaceActionLinks403Error1",
          ApiV1MiscGoogleBusinessLocationPlaceActionLinks403Error1
        >
      | Declared<
          "apiV1MiscGoogleBusinessLocationPlaceActionLinks404Error1",
          ApiV1MiscGoogleBusinessLocationPlaceActionLinks404Error1
        >
      | Declared<
          "apiV1MiscGoogleBusinessLocationPlaceActionLinks429Error1",
          ApiV1MiscGoogleBusinessLocationPlaceActionLinks429Error1
        >
      | Declared<
          "apiV1MiscGoogleBusinessLocationPlaceActionLinks500Error1",
          ApiV1MiscGoogleBusinessLocationPlaceActionLinks500Error1
        >
      | Declared<
          "apiV1MiscGoogleBusinessLocationPlaceActionLinks502Error1",
          ApiV1MiscGoogleBusinessLocationPlaceActionLinks502Error1
        >
      | Declared<
          "apiV1MiscGoogleBusinessLocationPlaceActionLinks503Error1",
          ApiV1MiscGoogleBusinessLocationPlaceActionLinks503Error1
        >
      | Declared<
          "apiV1MiscGoogleBusinessLocationPlaceActionLinks504Error1",
          ApiV1MiscGoogleBusinessLocationPlaceActionLinks504Error1
        >
      | Undeclared;

    static readonly errors: ErrorDecoders<MiscGoogleBusinessListPlaceActionLinksError> = [
      {
        on: 400,
        kind: "apiV1MiscGoogleBusinessLocationPlaceActionLinks400Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessLocationPlaceActionLinks400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1MiscGoogleBusinessLocationPlaceActionLinks401Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessLocationPlaceActionLinks401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1MiscGoogleBusinessLocationPlaceActionLinks403Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessLocationPlaceActionLinks403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1MiscGoogleBusinessLocationPlaceActionLinks404Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessLocationPlaceActionLinks404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1MiscGoogleBusinessLocationPlaceActionLinks429Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessLocationPlaceActionLinks429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1MiscGoogleBusinessLocationPlaceActionLinks500Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessLocationPlaceActionLinks500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1MiscGoogleBusinessLocationPlaceActionLinks502Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessLocationPlaceActionLinks502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1MiscGoogleBusinessLocationPlaceActionLinks503Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessLocationPlaceActionLinks503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1MiscGoogleBusinessLocationPlaceActionLinks504Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessLocationPlaceActionLinks504Error1Schema },
      },
    ];
  }

  export type MiscGoogleBusinessListSearchKeywordsRequest = {
    teamId: string;
    /** Month in `YYYY-MM` format, inclusive. */
    startMonth: string;
    /** Month in `YYYY-MM` format, inclusive. */
    endMonth: string;
    pageSize?: number;
    pageToken?: string;
  };

  export const miscGoogleBusinessListSearchKeywordsRequestSchema: Schema<MiscGoogleBusinessListSearchKeywordsRequest> =
    s.lazySchema(() =>
      s.object<MiscGoogleBusinessListSearchKeywordsRequest>({
        teamId: s.string(),
        startMonth: s.string().check(s.pattern("^\\d{4}-(0[1-9]|1[0-2])$")),
        endMonth: s.string().check(s.pattern("^\\d{4}-(0[1-9]|1[0-2])$")),
        pageSize: s.optional(s.int().check(s.gte(1), s.lte(100))),
        pageToken: s.optional(s.string()),
      }),
    );

  export class MiscGoogleBusinessListSearchKeywordsError extends ApiError {
    declare readonly payload:
      | Declared<
          "apiV1MiscGoogleBusinessLocationSearchKeywords400Error1",
          ApiV1MiscGoogleBusinessLocationSearchKeywords400Error1
        >
      | Declared<
          "apiV1MiscGoogleBusinessLocationSearchKeywords401Error1",
          ApiV1MiscGoogleBusinessLocationSearchKeywords401Error1
        >
      | Declared<
          "apiV1MiscGoogleBusinessLocationSearchKeywords403Error1",
          ApiV1MiscGoogleBusinessLocationSearchKeywords403Error1
        >
      | Declared<
          "apiV1MiscGoogleBusinessLocationSearchKeywords404Error1",
          ApiV1MiscGoogleBusinessLocationSearchKeywords404Error1
        >
      | Declared<
          "apiV1MiscGoogleBusinessLocationSearchKeywords429Error1",
          ApiV1MiscGoogleBusinessLocationSearchKeywords429Error1
        >
      | Declared<
          "apiV1MiscGoogleBusinessLocationSearchKeywords500Error1",
          ApiV1MiscGoogleBusinessLocationSearchKeywords500Error1
        >
      | Declared<
          "apiV1MiscGoogleBusinessLocationSearchKeywords502Error1",
          ApiV1MiscGoogleBusinessLocationSearchKeywords502Error1
        >
      | Declared<
          "apiV1MiscGoogleBusinessLocationSearchKeywords503Error1",
          ApiV1MiscGoogleBusinessLocationSearchKeywords503Error1
        >
      | Declared<
          "apiV1MiscGoogleBusinessLocationSearchKeywords504Error1",
          ApiV1MiscGoogleBusinessLocationSearchKeywords504Error1
        >
      | Undeclared;

    static readonly errors: ErrorDecoders<MiscGoogleBusinessListSearchKeywordsError> = [
      {
        on: 400,
        kind: "apiV1MiscGoogleBusinessLocationSearchKeywords400Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessLocationSearchKeywords400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1MiscGoogleBusinessLocationSearchKeywords401Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessLocationSearchKeywords401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1MiscGoogleBusinessLocationSearchKeywords403Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessLocationSearchKeywords403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1MiscGoogleBusinessLocationSearchKeywords404Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessLocationSearchKeywords404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1MiscGoogleBusinessLocationSearchKeywords429Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessLocationSearchKeywords429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1MiscGoogleBusinessLocationSearchKeywords500Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessLocationSearchKeywords500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1MiscGoogleBusinessLocationSearchKeywords502Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessLocationSearchKeywords502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1MiscGoogleBusinessLocationSearchKeywords503Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessLocationSearchKeywords503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1MiscGoogleBusinessLocationSearchKeywords504Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessLocationSearchKeywords504Error1Schema },
      },
    ];
  }

  export type MiscGoogleBusinessReplyToReviewRequest = {
    reviewId: string;
    /** Body */
    body?: ApiV1MiscGoogleBusinessReviewsReplyRequest;
  };

  export class MiscGoogleBusinessReplyToReviewError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1MiscGoogleBusinessReviewsReply400Error1", ApiV1MiscGoogleBusinessReviewsReply400Error1>
      | Declared<"apiV1MiscGoogleBusinessReviewsReply401Error1", ApiV1MiscGoogleBusinessReviewsReply401Error1>
      | Declared<"apiV1MiscGoogleBusinessReviewsReply403Error1", ApiV1MiscGoogleBusinessReviewsReply403Error1>
      | Declared<"apiV1MiscGoogleBusinessReviewsReply404Error1", ApiV1MiscGoogleBusinessReviewsReply404Error1>
      | Declared<"apiV1MiscGoogleBusinessReviewsReply429Error1", ApiV1MiscGoogleBusinessReviewsReply429Error1>
      | Declared<"apiV1MiscGoogleBusinessReviewsReply500Error1", ApiV1MiscGoogleBusinessReviewsReply500Error1>
      | Declared<"apiV1MiscGoogleBusinessReviewsReply502Error1", ApiV1MiscGoogleBusinessReviewsReply502Error1>
      | Declared<"apiV1MiscGoogleBusinessReviewsReply503Error1", ApiV1MiscGoogleBusinessReviewsReply503Error1>
      | Declared<"apiV1MiscGoogleBusinessReviewsReply504Error1", ApiV1MiscGoogleBusinessReviewsReply504Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<MiscGoogleBusinessReplyToReviewError> = [
      {
        on: 400,
        kind: "apiV1MiscGoogleBusinessReviewsReply400Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessReviewsReply400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1MiscGoogleBusinessReviewsReply401Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessReviewsReply401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1MiscGoogleBusinessReviewsReply403Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessReviewsReply403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1MiscGoogleBusinessReviewsReply404Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessReviewsReply404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1MiscGoogleBusinessReviewsReply429Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessReviewsReply429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1MiscGoogleBusinessReviewsReply500Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessReviewsReply500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1MiscGoogleBusinessReviewsReply502Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessReviewsReply502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1MiscGoogleBusinessReviewsReply503Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessReviewsReply503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1MiscGoogleBusinessReviewsReply504Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessReviewsReply504Error1Schema },
      },
    ];
  }

  export type MiscGoogleBusinessUpdateAttributesRequest = {
    /** Body */
    body?: ApiV1MiscGoogleBusinessLocationAttributesRequest;
  };

  export class MiscGoogleBusinessUpdateAttributesError extends ApiError {
    declare readonly payload:
      | Declared<
          "apiV1MiscGoogleBusinessLocationAttributes400Error1",
          ApiV1MiscGoogleBusinessLocationAttributes400Error1
        >
      | Declared<
          "apiV1MiscGoogleBusinessLocationAttributes401Error1",
          ApiV1MiscGoogleBusinessLocationAttributes401Error1
        >
      | Declared<
          "apiV1MiscGoogleBusinessLocationAttributes403Error1",
          ApiV1MiscGoogleBusinessLocationAttributes403Error1
        >
      | Declared<
          "apiV1MiscGoogleBusinessLocationAttributes404Error1",
          ApiV1MiscGoogleBusinessLocationAttributes404Error1
        >
      | Declared<
          "apiV1MiscGoogleBusinessLocationAttributes429Error1",
          ApiV1MiscGoogleBusinessLocationAttributes429Error1
        >
      | Declared<
          "apiV1MiscGoogleBusinessLocationAttributes500Error1",
          ApiV1MiscGoogleBusinessLocationAttributes500Error1
        >
      | Declared<
          "apiV1MiscGoogleBusinessLocationAttributes502Error1",
          ApiV1MiscGoogleBusinessLocationAttributes502Error1
        >
      | Declared<
          "apiV1MiscGoogleBusinessLocationAttributes503Error1",
          ApiV1MiscGoogleBusinessLocationAttributes503Error1
        >
      | Declared<
          "apiV1MiscGoogleBusinessLocationAttributes504Error1",
          ApiV1MiscGoogleBusinessLocationAttributes504Error1
        >
      | Undeclared;

    static readonly errors: ErrorDecoders<MiscGoogleBusinessUpdateAttributesError> = [
      {
        on: 400,
        kind: "apiV1MiscGoogleBusinessLocationAttributes400Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessLocationAttributes400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1MiscGoogleBusinessLocationAttributes401Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessLocationAttributes401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1MiscGoogleBusinessLocationAttributes403Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessLocationAttributes403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1MiscGoogleBusinessLocationAttributes404Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessLocationAttributes404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1MiscGoogleBusinessLocationAttributes429Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessLocationAttributes429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1MiscGoogleBusinessLocationAttributes500Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessLocationAttributes500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1MiscGoogleBusinessLocationAttributes502Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessLocationAttributes502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1MiscGoogleBusinessLocationAttributes503Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessLocationAttributes503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1MiscGoogleBusinessLocationAttributes504Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessLocationAttributes504Error1Schema },
      },
    ];
  }

  export type MiscGoogleBusinessUpdateFoodMenusRequest = {
    /** Body */
    body?: ApiV1MiscGoogleBusinessLocationFoodMenusRequest;
  };

  export class MiscGoogleBusinessUpdateFoodMenusError extends ApiError {
    declare readonly payload:
      | Declared<
          "apiV1MiscGoogleBusinessLocationFoodMenus400Error1",
          ApiV1MiscGoogleBusinessLocationFoodMenus400Error1
        >
      | Declared<
          "apiV1MiscGoogleBusinessLocationFoodMenus401Error1",
          ApiV1MiscGoogleBusinessLocationFoodMenus401Error1
        >
      | Declared<
          "apiV1MiscGoogleBusinessLocationFoodMenus403Error1",
          ApiV1MiscGoogleBusinessLocationFoodMenus403Error1
        >
      | Declared<
          "apiV1MiscGoogleBusinessLocationFoodMenus404Error1",
          ApiV1MiscGoogleBusinessLocationFoodMenus404Error1
        >
      | Declared<
          "apiV1MiscGoogleBusinessLocationFoodMenus429Error1",
          ApiV1MiscGoogleBusinessLocationFoodMenus429Error1
        >
      | Declared<
          "apiV1MiscGoogleBusinessLocationFoodMenus500Error1",
          ApiV1MiscGoogleBusinessLocationFoodMenus500Error1
        >
      | Declared<
          "apiV1MiscGoogleBusinessLocationFoodMenus502Error1",
          ApiV1MiscGoogleBusinessLocationFoodMenus502Error1
        >
      | Declared<
          "apiV1MiscGoogleBusinessLocationFoodMenus503Error1",
          ApiV1MiscGoogleBusinessLocationFoodMenus503Error1
        >
      | Declared<
          "apiV1MiscGoogleBusinessLocationFoodMenus504Error1",
          ApiV1MiscGoogleBusinessLocationFoodMenus504Error1
        >
      | Undeclared;

    static readonly errors: ErrorDecoders<MiscGoogleBusinessUpdateFoodMenusError> = [
      {
        on: 400,
        kind: "apiV1MiscGoogleBusinessLocationFoodMenus400Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessLocationFoodMenus400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1MiscGoogleBusinessLocationFoodMenus401Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessLocationFoodMenus401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1MiscGoogleBusinessLocationFoodMenus403Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessLocationFoodMenus403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1MiscGoogleBusinessLocationFoodMenus404Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessLocationFoodMenus404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1MiscGoogleBusinessLocationFoodMenus429Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessLocationFoodMenus429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1MiscGoogleBusinessLocationFoodMenus500Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessLocationFoodMenus500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1MiscGoogleBusinessLocationFoodMenus502Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessLocationFoodMenus502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1MiscGoogleBusinessLocationFoodMenus503Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessLocationFoodMenus503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1MiscGoogleBusinessLocationFoodMenus504Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessLocationFoodMenus504Error1Schema },
      },
    ];
  }

  export type MiscGoogleBusinessUpdateHoursRequest = {
    /** Body */
    body?: ApiV1MiscGoogleBusinessLocationHoursRequest;
  };

  export class MiscGoogleBusinessUpdateHoursError extends ApiError {
    declare readonly payload:
      | Declared<
          "apiV1MiscGoogleBusinessLocationHours400Error1",
          ApiV1MiscGoogleBusinessLocationHours400Error1
        >
      | Declared<
          "apiV1MiscGoogleBusinessLocationHours401Error1",
          ApiV1MiscGoogleBusinessLocationHours401Error1
        >
      | Declared<
          "apiV1MiscGoogleBusinessLocationHours403Error1",
          ApiV1MiscGoogleBusinessLocationHours403Error1
        >
      | Declared<
          "apiV1MiscGoogleBusinessLocationHours404Error1",
          ApiV1MiscGoogleBusinessLocationHours404Error1
        >
      | Declared<
          "apiV1MiscGoogleBusinessLocationHours429Error1",
          ApiV1MiscGoogleBusinessLocationHours429Error1
        >
      | Declared<
          "apiV1MiscGoogleBusinessLocationHours500Error1",
          ApiV1MiscGoogleBusinessLocationHours500Error1
        >
      | Declared<
          "apiV1MiscGoogleBusinessLocationHours502Error1",
          ApiV1MiscGoogleBusinessLocationHours502Error1
        >
      | Declared<
          "apiV1MiscGoogleBusinessLocationHours503Error1",
          ApiV1MiscGoogleBusinessLocationHours503Error1
        >
      | Declared<
          "apiV1MiscGoogleBusinessLocationHours504Error1",
          ApiV1MiscGoogleBusinessLocationHours504Error1
        >
      | Undeclared;

    static readonly errors: ErrorDecoders<MiscGoogleBusinessUpdateHoursError> = [
      {
        on: 400,
        kind: "apiV1MiscGoogleBusinessLocationHours400Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessLocationHours400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1MiscGoogleBusinessLocationHours401Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessLocationHours401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1MiscGoogleBusinessLocationHours403Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessLocationHours403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1MiscGoogleBusinessLocationHours404Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessLocationHours404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1MiscGoogleBusinessLocationHours429Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessLocationHours429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1MiscGoogleBusinessLocationHours500Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessLocationHours500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1MiscGoogleBusinessLocationHours502Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessLocationHours502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1MiscGoogleBusinessLocationHours503Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessLocationHours503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1MiscGoogleBusinessLocationHours504Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessLocationHours504Error1Schema },
      },
    ];
  }

  export type MiscGoogleBusinessUpdateLocationRequest = {
    /** Body */
    body?: ApiV1MiscGoogleBusinessLocationRequest;
  };

  export class MiscGoogleBusinessUpdateLocationError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1MiscGoogleBusinessLocation400Error1", ApiV1MiscGoogleBusinessLocation400Error1>
      | Declared<"apiV1MiscGoogleBusinessLocation401Error1", ApiV1MiscGoogleBusinessLocation401Error1>
      | Declared<"apiV1MiscGoogleBusinessLocation403Error1", ApiV1MiscGoogleBusinessLocation403Error1>
      | Declared<"apiV1MiscGoogleBusinessLocation404Error1", ApiV1MiscGoogleBusinessLocation404Error1>
      | Declared<"apiV1MiscGoogleBusinessLocation429Error1", ApiV1MiscGoogleBusinessLocation429Error1>
      | Declared<"apiV1MiscGoogleBusinessLocation500Error1", ApiV1MiscGoogleBusinessLocation500Error1>
      | Declared<"apiV1MiscGoogleBusinessLocation502Error1", ApiV1MiscGoogleBusinessLocation502Error1>
      | Declared<"apiV1MiscGoogleBusinessLocation503Error1", ApiV1MiscGoogleBusinessLocation503Error1>
      | Declared<"apiV1MiscGoogleBusinessLocation504Error1", ApiV1MiscGoogleBusinessLocation504Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<MiscGoogleBusinessUpdateLocationError> = [
      {
        on: 400,
        kind: "apiV1MiscGoogleBusinessLocation400Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessLocation400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1MiscGoogleBusinessLocation401Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessLocation401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1MiscGoogleBusinessLocation403Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessLocation403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1MiscGoogleBusinessLocation404Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessLocation404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1MiscGoogleBusinessLocation429Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessLocation429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1MiscGoogleBusinessLocation500Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessLocation500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1MiscGoogleBusinessLocation502Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessLocation502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1MiscGoogleBusinessLocation503Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessLocation503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1MiscGoogleBusinessLocation504Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessLocation504Error1Schema },
      },
    ];
  }

  export type MiscGoogleBusinessUpdatePlaceActionLinkRequest = {
    /** Body */
    body?: ApiV1MiscGoogleBusinessLocationPlaceActionLinksRequest1;
  };

  export class MiscGoogleBusinessUpdatePlaceActionLinkError extends ApiError {
    declare readonly payload:
      | Declared<
          "apiV1MiscGoogleBusinessLocationPlaceActionLinks400Error1",
          ApiV1MiscGoogleBusinessLocationPlaceActionLinks400Error1
        >
      | Declared<
          "apiV1MiscGoogleBusinessLocationPlaceActionLinks401Error1",
          ApiV1MiscGoogleBusinessLocationPlaceActionLinks401Error1
        >
      | Declared<
          "apiV1MiscGoogleBusinessLocationPlaceActionLinks403Error1",
          ApiV1MiscGoogleBusinessLocationPlaceActionLinks403Error1
        >
      | Declared<
          "apiV1MiscGoogleBusinessLocationPlaceActionLinks404Error1",
          ApiV1MiscGoogleBusinessLocationPlaceActionLinks404Error1
        >
      | Declared<
          "apiV1MiscGoogleBusinessLocationPlaceActionLinks429Error1",
          ApiV1MiscGoogleBusinessLocationPlaceActionLinks429Error1
        >
      | Declared<
          "apiV1MiscGoogleBusinessLocationPlaceActionLinks500Error1",
          ApiV1MiscGoogleBusinessLocationPlaceActionLinks500Error1
        >
      | Declared<
          "apiV1MiscGoogleBusinessLocationPlaceActionLinks502Error1",
          ApiV1MiscGoogleBusinessLocationPlaceActionLinks502Error1
        >
      | Declared<
          "apiV1MiscGoogleBusinessLocationPlaceActionLinks503Error1",
          ApiV1MiscGoogleBusinessLocationPlaceActionLinks503Error1
        >
      | Declared<
          "apiV1MiscGoogleBusinessLocationPlaceActionLinks504Error1",
          ApiV1MiscGoogleBusinessLocationPlaceActionLinks504Error1
        >
      | Undeclared;

    static readonly errors: ErrorDecoders<MiscGoogleBusinessUpdatePlaceActionLinkError> = [
      {
        on: 400,
        kind: "apiV1MiscGoogleBusinessLocationPlaceActionLinks400Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessLocationPlaceActionLinks400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1MiscGoogleBusinessLocationPlaceActionLinks401Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessLocationPlaceActionLinks401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1MiscGoogleBusinessLocationPlaceActionLinks403Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessLocationPlaceActionLinks403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1MiscGoogleBusinessLocationPlaceActionLinks404Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessLocationPlaceActionLinks404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1MiscGoogleBusinessLocationPlaceActionLinks429Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessLocationPlaceActionLinks429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1MiscGoogleBusinessLocationPlaceActionLinks500Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessLocationPlaceActionLinks500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1MiscGoogleBusinessLocationPlaceActionLinks502Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessLocationPlaceActionLinks502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1MiscGoogleBusinessLocationPlaceActionLinks503Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessLocationPlaceActionLinks503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1MiscGoogleBusinessLocationPlaceActionLinks504Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessLocationPlaceActionLinks504Error1Schema },
      },
    ];
  }

  export type MiscGoogleBusinessUpdateServiceListRequest = {
    /** Body */
    body?: ApiV1MiscGoogleBusinessLocationServiceListRequest;
  };

  export class MiscGoogleBusinessUpdateServiceListError extends ApiError {
    declare readonly payload:
      | Declared<
          "apiV1MiscGoogleBusinessLocationServiceList400Error1",
          ApiV1MiscGoogleBusinessLocationServiceList400Error1
        >
      | Declared<
          "apiV1MiscGoogleBusinessLocationServiceList401Error1",
          ApiV1MiscGoogleBusinessLocationServiceList401Error1
        >
      | Declared<
          "apiV1MiscGoogleBusinessLocationServiceList403Error1",
          ApiV1MiscGoogleBusinessLocationServiceList403Error1
        >
      | Declared<
          "apiV1MiscGoogleBusinessLocationServiceList404Error1",
          ApiV1MiscGoogleBusinessLocationServiceList404Error1
        >
      | Declared<
          "apiV1MiscGoogleBusinessLocationServiceList429Error1",
          ApiV1MiscGoogleBusinessLocationServiceList429Error1
        >
      | Declared<
          "apiV1MiscGoogleBusinessLocationServiceList500Error1",
          ApiV1MiscGoogleBusinessLocationServiceList500Error1
        >
      | Declared<
          "apiV1MiscGoogleBusinessLocationServiceList502Error1",
          ApiV1MiscGoogleBusinessLocationServiceList502Error1
        >
      | Declared<
          "apiV1MiscGoogleBusinessLocationServiceList503Error1",
          ApiV1MiscGoogleBusinessLocationServiceList503Error1
        >
      | Declared<
          "apiV1MiscGoogleBusinessLocationServiceList504Error1",
          ApiV1MiscGoogleBusinessLocationServiceList504Error1
        >
      | Undeclared;

    static readonly errors: ErrorDecoders<MiscGoogleBusinessUpdateServiceListError> = [
      {
        on: 400,
        kind: "apiV1MiscGoogleBusinessLocationServiceList400Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessLocationServiceList400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1MiscGoogleBusinessLocationServiceList401Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessLocationServiceList401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1MiscGoogleBusinessLocationServiceList403Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessLocationServiceList403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1MiscGoogleBusinessLocationServiceList404Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessLocationServiceList404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1MiscGoogleBusinessLocationServiceList429Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessLocationServiceList429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1MiscGoogleBusinessLocationServiceList500Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessLocationServiceList500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1MiscGoogleBusinessLocationServiceList502Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessLocationServiceList502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1MiscGoogleBusinessLocationServiceList503Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessLocationServiceList503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1MiscGoogleBusinessLocationServiceList504Error1",
        decode: { kind: "json", schema: apiV1MiscGoogleBusinessLocationServiceList504Error1Schema },
      },
    ];
  }

  export type MiscInstagramBusinessDiscoveryRequest = {
    teamId: string;
    /** Instagram username to search for */
    username: string;
  };

  export const miscInstagramBusinessDiscoveryRequestSchema: Schema<MiscInstagramBusinessDiscoveryRequest> =
    s.lazySchema(() =>
      s.object<MiscInstagramBusinessDiscoveryRequest>({
        teamId: s.string(),
        username: s.string().check(s.minLength(1)),
      }),
    );

  export class MiscInstagramBusinessDiscoveryError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1MiscInstagramTags400Error1", ApiV1MiscInstagramTags400Error1>
      | Declared<"apiV1MiscInstagramTags401Error1", ApiV1MiscInstagramTags401Error1>
      | Declared<"apiV1MiscInstagramTags403Error1", ApiV1MiscInstagramTags403Error1>
      | Declared<"apiV1MiscInstagramTags404Error1", ApiV1MiscInstagramTags404Error1>
      | Declared<"apiV1MiscInstagramTags429Error1", ApiV1MiscInstagramTags429Error1>
      | Declared<"apiV1MiscInstagramTags500Error1", ApiV1MiscInstagramTags500Error1>
      | Declared<"apiV1MiscInstagramTags502Error1", ApiV1MiscInstagramTags502Error1>
      | Declared<"apiV1MiscInstagramTags503Error1", ApiV1MiscInstagramTags503Error1>
      | Declared<"apiV1MiscInstagramTags504Error1", ApiV1MiscInstagramTags504Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<MiscInstagramBusinessDiscoveryError> = [
      {
        on: 400,
        kind: "apiV1MiscInstagramTags400Error1",
        decode: { kind: "json", schema: apiV1MiscInstagramTags400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1MiscInstagramTags401Error1",
        decode: { kind: "json", schema: apiV1MiscInstagramTags401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1MiscInstagramTags403Error1",
        decode: { kind: "json", schema: apiV1MiscInstagramTags403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1MiscInstagramTags404Error1",
        decode: { kind: "json", schema: apiV1MiscInstagramTags404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1MiscInstagramTags429Error1",
        decode: { kind: "json", schema: apiV1MiscInstagramTags429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1MiscInstagramTags500Error1",
        decode: { kind: "json", schema: apiV1MiscInstagramTags500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1MiscInstagramTags502Error1",
        decode: { kind: "json", schema: apiV1MiscInstagramTags502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1MiscInstagramTags503Error1",
        decode: { kind: "json", schema: apiV1MiscInstagramTags503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1MiscInstagramTags504Error1",
        decode: { kind: "json", schema: apiV1MiscInstagramTags504Error1Schema },
      },
    ];
  }

  export type MiscInstagramDeleteCommentRequest = {
    /** Body */
    body?: ApiV1MiscInstagramCommentRequest;
  };

  export class MiscInstagramDeleteCommentError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1MiscInstagramComment400Error1", ApiV1MiscInstagramComment400Error1>
      | Declared<"apiV1MiscInstagramComment401Error1", ApiV1MiscInstagramComment401Error1>
      | Declared<"apiV1MiscInstagramComment403Error1", ApiV1MiscInstagramComment403Error1>
      | Declared<"apiV1MiscInstagramComment404Error1", ApiV1MiscInstagramComment404Error1>
      | Declared<"apiV1MiscInstagramComment429Error1", ApiV1MiscInstagramComment429Error1>
      | Declared<"apiV1MiscInstagramComment500Error1", ApiV1MiscInstagramComment500Error1>
      | Declared<"apiV1MiscInstagramComment502Error1", ApiV1MiscInstagramComment502Error1>
      | Declared<"apiV1MiscInstagramComment503Error1", ApiV1MiscInstagramComment503Error1>
      | Declared<"apiV1MiscInstagramComment504Error1", ApiV1MiscInstagramComment504Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<MiscInstagramDeleteCommentError> = [
      {
        on: 400,
        kind: "apiV1MiscInstagramComment400Error1",
        decode: { kind: "json", schema: apiV1MiscInstagramComment400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1MiscInstagramComment401Error1",
        decode: { kind: "json", schema: apiV1MiscInstagramComment401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1MiscInstagramComment403Error1",
        decode: { kind: "json", schema: apiV1MiscInstagramComment403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1MiscInstagramComment404Error1",
        decode: { kind: "json", schema: apiV1MiscInstagramComment404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1MiscInstagramComment429Error1",
        decode: { kind: "json", schema: apiV1MiscInstagramComment429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1MiscInstagramComment500Error1",
        decode: { kind: "json", schema: apiV1MiscInstagramComment500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1MiscInstagramComment502Error1",
        decode: { kind: "json", schema: apiV1MiscInstagramComment502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1MiscInstagramComment503Error1",
        decode: { kind: "json", schema: apiV1MiscInstagramComment503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1MiscInstagramComment504Error1",
        decode: { kind: "json", schema: apiV1MiscInstagramComment504Error1Schema },
      },
    ];
  }

  export type MiscInstagramSearchAudioRequest = {
    teamId: string;
    /** The type of Instagram audio to search for. */
    audioType: AudioType;
    /** Optional keyword search query. */
    searchQuery?: string;
  };

  export const miscInstagramSearchAudioRequestSchema: Schema<MiscInstagramSearchAudioRequest> = s.lazySchema(
    () =>
      s.object<MiscInstagramSearchAudioRequest>({
        teamId: s.string(),
        audioType: audioTypeSchema,
        searchQuery: s.optional(s.string().check(s.minLength(1), s.maxLength(100))),
      }),
  );

  export class MiscInstagramSearchAudioError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1MiscInstagramAudio400Error1", ApiV1MiscInstagramAudio400Error1>
      | Declared<"apiV1MiscInstagramAudio401Error1", ApiV1MiscInstagramAudio401Error1>
      | Declared<"apiV1MiscInstagramAudio403Error1", ApiV1MiscInstagramAudio403Error1>
      | Declared<"apiV1MiscInstagramAudio404Error1", ApiV1MiscInstagramAudio404Error1>
      | Declared<"apiV1MiscInstagramAudio429Error1", ApiV1MiscInstagramAudio429Error1>
      | Declared<"apiV1MiscInstagramAudio500Error1", ApiV1MiscInstagramAudio500Error1>
      | Declared<"apiV1MiscInstagramAudio502Error1", ApiV1MiscInstagramAudio502Error1>
      | Declared<"apiV1MiscInstagramAudio503Error1", ApiV1MiscInstagramAudio503Error1>
      | Declared<"apiV1MiscInstagramAudio504Error1", ApiV1MiscInstagramAudio504Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<MiscInstagramSearchAudioError> = [
      {
        on: 400,
        kind: "apiV1MiscInstagramAudio400Error1",
        decode: { kind: "json", schema: apiV1MiscInstagramAudio400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1MiscInstagramAudio401Error1",
        decode: { kind: "json", schema: apiV1MiscInstagramAudio401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1MiscInstagramAudio403Error1",
        decode: { kind: "json", schema: apiV1MiscInstagramAudio403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1MiscInstagramAudio404Error1",
        decode: { kind: "json", schema: apiV1MiscInstagramAudio404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1MiscInstagramAudio429Error1",
        decode: { kind: "json", schema: apiV1MiscInstagramAudio429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1MiscInstagramAudio500Error1",
        decode: { kind: "json", schema: apiV1MiscInstagramAudio500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1MiscInstagramAudio502Error1",
        decode: { kind: "json", schema: apiV1MiscInstagramAudio502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1MiscInstagramAudio503Error1",
        decode: { kind: "json", schema: apiV1MiscInstagramAudio503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1MiscInstagramAudio504Error1",
        decode: { kind: "json", schema: apiV1MiscInstagramAudio504Error1Schema },
      },
    ];
  }

  export type MiscInstagramSearchLocationsRequest = {
    teamId: string;
    /** Free-text query used to search location pages */
    q: string;
    /** @default 10 */
    limit?: number;
  };

  export const miscInstagramSearchLocationsRequestSchema: Schema<MiscInstagramSearchLocationsRequest> =
    s.lazySchema(() =>
      s.object<MiscInstagramSearchLocationsRequest>({
        teamId: s.string(),
        q: s.string().check(s.minLength(1)),
        limit: s.defaulted(s.int().check(s.gte(1), s.lte(25)), 10),
      }),
    );

  export class MiscInstagramSearchLocationsError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1MiscInstagramLocations400Error1", ApiV1MiscInstagramLocations400Error1>
      | Declared<"apiV1MiscInstagramLocations401Error1", ApiV1MiscInstagramLocations401Error1>
      | Declared<"apiV1MiscInstagramLocations403Error1", ApiV1MiscInstagramLocations403Error1>
      | Declared<"apiV1MiscInstagramLocations404Error1", ApiV1MiscInstagramLocations404Error1>
      | Declared<"apiV1MiscInstagramLocations429Error1", ApiV1MiscInstagramLocations429Error1>
      | Declared<"apiV1MiscInstagramLocations500Error1", ApiV1MiscInstagramLocations500Error1>
      | Declared<"apiV1MiscInstagramLocations502Error1", ApiV1MiscInstagramLocations502Error1>
      | Declared<"apiV1MiscInstagramLocations503Error1", ApiV1MiscInstagramLocations503Error1>
      | Declared<"apiV1MiscInstagramLocations504Error1", ApiV1MiscInstagramLocations504Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<MiscInstagramSearchLocationsError> = [
      {
        on: 400,
        kind: "apiV1MiscInstagramLocations400Error1",
        decode: { kind: "json", schema: apiV1MiscInstagramLocations400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1MiscInstagramLocations401Error1",
        decode: { kind: "json", schema: apiV1MiscInstagramLocations401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1MiscInstagramLocations403Error1",
        decode: { kind: "json", schema: apiV1MiscInstagramLocations403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1MiscInstagramLocations404Error1",
        decode: { kind: "json", schema: apiV1MiscInstagramLocations404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1MiscInstagramLocations429Error1",
        decode: { kind: "json", schema: apiV1MiscInstagramLocations429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1MiscInstagramLocations500Error1",
        decode: { kind: "json", schema: apiV1MiscInstagramLocations500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1MiscInstagramLocations502Error1",
        decode: { kind: "json", schema: apiV1MiscInstagramLocations502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1MiscInstagramLocations503Error1",
        decode: { kind: "json", schema: apiV1MiscInstagramLocations503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1MiscInstagramLocations504Error1",
        decode: { kind: "json", schema: apiV1MiscInstagramLocations504Error1Schema },
      },
    ];
  }

  export type MiscLinkedinBuildCommentaryRequest = {
    /** Body */
    body?: ApiV1MiscLinkedinMentionsBuilderRequest;
  };

  export class MiscLinkedinBuildCommentaryError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1MiscLinkedinMentionsBuilder400Error1", ApiV1MiscLinkedinMentionsBuilder400Error1>
      | Declared<"apiV1MiscLinkedinMentionsBuilder401Error1", ApiV1MiscLinkedinMentionsBuilder401Error1>
      | Declared<"apiV1MiscLinkedinMentionsBuilder403Error1", ApiV1MiscLinkedinMentionsBuilder403Error1>
      | Declared<"apiV1MiscLinkedinMentionsBuilder404Error1", ApiV1MiscLinkedinMentionsBuilder404Error1>
      | Declared<"apiV1MiscLinkedinMentionsBuilder429Error1", ApiV1MiscLinkedinMentionsBuilder429Error1>
      | Declared<"apiV1MiscLinkedinMentionsBuilder500Error1", ApiV1MiscLinkedinMentionsBuilder500Error1>
      | Declared<"apiV1MiscLinkedinMentionsBuilder502Error1", ApiV1MiscLinkedinMentionsBuilder502Error1>
      | Declared<"apiV1MiscLinkedinMentionsBuilder503Error1", ApiV1MiscLinkedinMentionsBuilder503Error1>
      | Declared<"apiV1MiscLinkedinMentionsBuilder504Error1", ApiV1MiscLinkedinMentionsBuilder504Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<MiscLinkedinBuildCommentaryError> = [
      {
        on: 400,
        kind: "apiV1MiscLinkedinMentionsBuilder400Error1",
        decode: { kind: "json", schema: apiV1MiscLinkedinMentionsBuilder400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1MiscLinkedinMentionsBuilder401Error1",
        decode: { kind: "json", schema: apiV1MiscLinkedinMentionsBuilder401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1MiscLinkedinMentionsBuilder403Error1",
        decode: { kind: "json", schema: apiV1MiscLinkedinMentionsBuilder403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1MiscLinkedinMentionsBuilder404Error1",
        decode: { kind: "json", schema: apiV1MiscLinkedinMentionsBuilder404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1MiscLinkedinMentionsBuilder429Error1",
        decode: { kind: "json", schema: apiV1MiscLinkedinMentionsBuilder429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1MiscLinkedinMentionsBuilder500Error1",
        decode: { kind: "json", schema: apiV1MiscLinkedinMentionsBuilder500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1MiscLinkedinMentionsBuilder502Error1",
        decode: { kind: "json", schema: apiV1MiscLinkedinMentionsBuilder502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1MiscLinkedinMentionsBuilder503Error1",
        decode: { kind: "json", schema: apiV1MiscLinkedinMentionsBuilder503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1MiscLinkedinMentionsBuilder504Error1",
        decode: { kind: "json", schema: apiV1MiscLinkedinMentionsBuilder504Error1Schema },
      },
    ];
  }

  export type MiscLinkedinDeleteCommentRequest = {
    /** Body */
    body?: ApiV1MiscLinkedinCommentRequest1;
  };

  export class MiscLinkedinDeleteCommentError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1MiscLinkedinComment400Error1", ApiV1MiscLinkedinComment400Error1>
      | Declared<"apiV1MiscLinkedinComment401Error1", ApiV1MiscLinkedinComment401Error1>
      | Declared<"apiV1MiscLinkedinComment403Error1", ApiV1MiscLinkedinComment403Error1>
      | Declared<"apiV1MiscLinkedinComment404Error1", ApiV1MiscLinkedinComment404Error1>
      | Declared<"apiV1MiscLinkedinComment429Error1", ApiV1MiscLinkedinComment429Error1>
      | Declared<"apiV1MiscLinkedinComment500Error1", ApiV1MiscLinkedinComment500Error1>
      | Declared<"apiV1MiscLinkedinComment502Error1", ApiV1MiscLinkedinComment502Error1>
      | Declared<"apiV1MiscLinkedinComment503Error1", ApiV1MiscLinkedinComment503Error1>
      | Declared<"apiV1MiscLinkedinComment504Error1", ApiV1MiscLinkedinComment504Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<MiscLinkedinDeleteCommentError> = [
      {
        on: 400,
        kind: "apiV1MiscLinkedinComment400Error1",
        decode: { kind: "json", schema: apiV1MiscLinkedinComment400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1MiscLinkedinComment401Error1",
        decode: { kind: "json", schema: apiV1MiscLinkedinComment401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1MiscLinkedinComment403Error1",
        decode: { kind: "json", schema: apiV1MiscLinkedinComment403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1MiscLinkedinComment404Error1",
        decode: { kind: "json", schema: apiV1MiscLinkedinComment404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1MiscLinkedinComment429Error1",
        decode: { kind: "json", schema: apiV1MiscLinkedinComment429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1MiscLinkedinComment500Error1",
        decode: { kind: "json", schema: apiV1MiscLinkedinComment500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1MiscLinkedinComment502Error1",
        decode: { kind: "json", schema: apiV1MiscLinkedinComment502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1MiscLinkedinComment503Error1",
        decode: { kind: "json", schema: apiV1MiscLinkedinComment503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1MiscLinkedinComment504Error1",
        decode: { kind: "json", schema: apiV1MiscLinkedinComment504Error1Schema },
      },
    ];
  }

  export type MiscLinkedinDeletePostRequest = {
    /** Body */
    body?: ApiV1MiscLinkedinPostRequest1;
  };

  export class MiscLinkedinDeletePostError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1MiscLinkedinPost400Error1", ApiV1MiscLinkedinPost400Error1>
      | Declared<"apiV1MiscLinkedinPost401Error1", ApiV1MiscLinkedinPost401Error1>
      | Declared<"apiV1MiscLinkedinPost403Error1", ApiV1MiscLinkedinPost403Error1>
      | Declared<"apiV1MiscLinkedinPost404Error1", ApiV1MiscLinkedinPost404Error1>
      | Declared<"apiV1MiscLinkedinPost429Error1", ApiV1MiscLinkedinPost429Error1>
      | Declared<"apiV1MiscLinkedinPost500Error1", ApiV1MiscLinkedinPost500Error1>
      | Declared<"apiV1MiscLinkedinPost502Error1", ApiV1MiscLinkedinPost502Error1>
      | Declared<"apiV1MiscLinkedinPost503Error1", ApiV1MiscLinkedinPost503Error1>
      | Declared<"apiV1MiscLinkedinPost504Error1", ApiV1MiscLinkedinPost504Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<MiscLinkedinDeletePostError> = [
      {
        on: 400,
        kind: "apiV1MiscLinkedinPost400Error1",
        decode: { kind: "json", schema: apiV1MiscLinkedinPost400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1MiscLinkedinPost401Error1",
        decode: { kind: "json", schema: apiV1MiscLinkedinPost401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1MiscLinkedinPost403Error1",
        decode: { kind: "json", schema: apiV1MiscLinkedinPost403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1MiscLinkedinPost404Error1",
        decode: { kind: "json", schema: apiV1MiscLinkedinPost404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1MiscLinkedinPost429Error1",
        decode: { kind: "json", schema: apiV1MiscLinkedinPost429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1MiscLinkedinPost500Error1",
        decode: { kind: "json", schema: apiV1MiscLinkedinPost500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1MiscLinkedinPost502Error1",
        decode: { kind: "json", schema: apiV1MiscLinkedinPost502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1MiscLinkedinPost503Error1",
        decode: { kind: "json", schema: apiV1MiscLinkedinPost503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1MiscLinkedinPost504Error1",
        decode: { kind: "json", schema: apiV1MiscLinkedinPost504Error1Schema },
      },
    ];
  }

  export type MiscLinkedinEditCommentRequest = {
    /** Body */
    body?: ApiV1MiscLinkedinCommentRequest;
  };

  export class MiscLinkedinEditCommentError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1MiscLinkedinComment400Error1", ApiV1MiscLinkedinComment400Error1>
      | Declared<"apiV1MiscLinkedinComment401Error1", ApiV1MiscLinkedinComment401Error1>
      | Declared<"apiV1MiscLinkedinComment403Error1", ApiV1MiscLinkedinComment403Error1>
      | Declared<"apiV1MiscLinkedinComment404Error1", ApiV1MiscLinkedinComment404Error1>
      | Declared<"apiV1MiscLinkedinComment429Error1", ApiV1MiscLinkedinComment429Error1>
      | Declared<"apiV1MiscLinkedinComment500Error1", ApiV1MiscLinkedinComment500Error1>
      | Declared<"apiV1MiscLinkedinComment502Error1", ApiV1MiscLinkedinComment502Error1>
      | Declared<"apiV1MiscLinkedinComment503Error1", ApiV1MiscLinkedinComment503Error1>
      | Declared<"apiV1MiscLinkedinComment504Error1", ApiV1MiscLinkedinComment504Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<MiscLinkedinEditCommentError> = [
      {
        on: 400,
        kind: "apiV1MiscLinkedinComment400Error1",
        decode: { kind: "json", schema: apiV1MiscLinkedinComment400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1MiscLinkedinComment401Error1",
        decode: { kind: "json", schema: apiV1MiscLinkedinComment401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1MiscLinkedinComment403Error1",
        decode: { kind: "json", schema: apiV1MiscLinkedinComment403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1MiscLinkedinComment404Error1",
        decode: { kind: "json", schema: apiV1MiscLinkedinComment404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1MiscLinkedinComment429Error1",
        decode: { kind: "json", schema: apiV1MiscLinkedinComment429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1MiscLinkedinComment500Error1",
        decode: { kind: "json", schema: apiV1MiscLinkedinComment500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1MiscLinkedinComment502Error1",
        decode: { kind: "json", schema: apiV1MiscLinkedinComment502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1MiscLinkedinComment503Error1",
        decode: { kind: "json", schema: apiV1MiscLinkedinComment503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1MiscLinkedinComment504Error1",
        decode: { kind: "json", schema: apiV1MiscLinkedinComment504Error1Schema },
      },
    ];
  }

  export type MiscLinkedinEditPostRequest = {
    /** Body */
    body?: ApiV1MiscLinkedinPostRequest;
  };

  export class MiscLinkedinEditPostError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1MiscLinkedinPost400Error1", ApiV1MiscLinkedinPost400Error1>
      | Declared<"apiV1MiscLinkedinPost401Error1", ApiV1MiscLinkedinPost401Error1>
      | Declared<"apiV1MiscLinkedinPost403Error1", ApiV1MiscLinkedinPost403Error1>
      | Declared<"apiV1MiscLinkedinPost404Error1", ApiV1MiscLinkedinPost404Error1>
      | Declared<"apiV1MiscLinkedinPost429Error1", ApiV1MiscLinkedinPost429Error1>
      | Declared<"apiV1MiscLinkedinPost500Error1", ApiV1MiscLinkedinPost500Error1>
      | Declared<"apiV1MiscLinkedinPost502Error1", ApiV1MiscLinkedinPost502Error1>
      | Declared<"apiV1MiscLinkedinPost503Error1", ApiV1MiscLinkedinPost503Error1>
      | Declared<"apiV1MiscLinkedinPost504Error1", ApiV1MiscLinkedinPost504Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<MiscLinkedinEditPostError> = [
      {
        on: 400,
        kind: "apiV1MiscLinkedinPost400Error1",
        decode: { kind: "json", schema: apiV1MiscLinkedinPost400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1MiscLinkedinPost401Error1",
        decode: { kind: "json", schema: apiV1MiscLinkedinPost401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1MiscLinkedinPost403Error1",
        decode: { kind: "json", schema: apiV1MiscLinkedinPost403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1MiscLinkedinPost404Error1",
        decode: { kind: "json", schema: apiV1MiscLinkedinPost404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1MiscLinkedinPost429Error1",
        decode: { kind: "json", schema: apiV1MiscLinkedinPost429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1MiscLinkedinPost500Error1",
        decode: { kind: "json", schema: apiV1MiscLinkedinPost500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1MiscLinkedinPost502Error1",
        decode: { kind: "json", schema: apiV1MiscLinkedinPost502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1MiscLinkedinPost503Error1",
        decode: { kind: "json", schema: apiV1MiscLinkedinPost503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1MiscLinkedinPost504Error1",
        decode: { kind: "json", schema: apiV1MiscLinkedinPost504Error1Schema },
      },
    ];
  }

  export type MiscLinkedinGetTagsRequest = {
    teamId: string;
    q?: string;
    url?: string;
    displayName?: string;
    /** @default Scope.All */
    scope?: Scope;
  };

  export const miscLinkedinGetTagsRequestSchema: Schema<MiscLinkedinGetTagsRequest> = s.lazySchema(() =>
    s.object<MiscLinkedinGetTagsRequest>({
      teamId: s.string(),
      q: s.optional(s.string().check(s.minLength(1))),
      url: s.optional(s.string().check(s.minLength(1), s.maxLength(2048))),
      displayName: s.optional(s.string().check(s.minLength(1), s.maxLength(200))),
      scope: s.defaulted(scopeSchema, Scope.All),
    }),
  );

  export class MiscLinkedinGetTagsError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1MiscLinkedinMentionsTags400Error1", ApiV1MiscLinkedinMentionsTags400Error1>
      | Declared<"apiV1MiscLinkedinMentionsTags401Error1", ApiV1MiscLinkedinMentionsTags401Error1>
      | Declared<"apiV1MiscLinkedinMentionsTags403Error1", ApiV1MiscLinkedinMentionsTags403Error1>
      | Declared<"apiV1MiscLinkedinMentionsTags404Error1", ApiV1MiscLinkedinMentionsTags404Error1>
      | Declared<"apiV1MiscLinkedinMentionsTags429Error1", ApiV1MiscLinkedinMentionsTags429Error1>
      | Declared<"apiV1MiscLinkedinMentionsTags500Error1", ApiV1MiscLinkedinMentionsTags500Error1>
      | Declared<"apiV1MiscLinkedinMentionsTags502Error1", ApiV1MiscLinkedinMentionsTags502Error1>
      | Declared<"apiV1MiscLinkedinMentionsTags503Error1", ApiV1MiscLinkedinMentionsTags503Error1>
      | Declared<"apiV1MiscLinkedinMentionsTags504Error1", ApiV1MiscLinkedinMentionsTags504Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<MiscLinkedinGetTagsError> = [
      {
        on: 400,
        kind: "apiV1MiscLinkedinMentionsTags400Error1",
        decode: { kind: "json", schema: apiV1MiscLinkedinMentionsTags400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1MiscLinkedinMentionsTags401Error1",
        decode: { kind: "json", schema: apiV1MiscLinkedinMentionsTags401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1MiscLinkedinMentionsTags403Error1",
        decode: { kind: "json", schema: apiV1MiscLinkedinMentionsTags403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1MiscLinkedinMentionsTags404Error1",
        decode: { kind: "json", schema: apiV1MiscLinkedinMentionsTags404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1MiscLinkedinMentionsTags429Error1",
        decode: { kind: "json", schema: apiV1MiscLinkedinMentionsTags429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1MiscLinkedinMentionsTags500Error1",
        decode: { kind: "json", schema: apiV1MiscLinkedinMentionsTags500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1MiscLinkedinMentionsTags502Error1",
        decode: { kind: "json", schema: apiV1MiscLinkedinMentionsTags502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1MiscLinkedinMentionsTags503Error1",
        decode: { kind: "json", schema: apiV1MiscLinkedinMentionsTags503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1MiscLinkedinMentionsTags504Error1",
        decode: { kind: "json", schema: apiV1MiscLinkedinMentionsTags504Error1Schema },
      },
    ];
  }

  export type MiscLinkedinResharePostRequest = {
    /** Body */
    body?: ApiV1MiscLinkedinPostReshareRequest;
  };

  export class MiscLinkedinResharePostError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1MiscLinkedinPostReshare400Error1", ApiV1MiscLinkedinPostReshare400Error1>
      | Declared<"apiV1MiscLinkedinPostReshare401Error1", ApiV1MiscLinkedinPostReshare401Error1>
      | Declared<"apiV1MiscLinkedinPostReshare403Error1", ApiV1MiscLinkedinPostReshare403Error1>
      | Declared<"apiV1MiscLinkedinPostReshare404Error1", ApiV1MiscLinkedinPostReshare404Error1>
      | Declared<"apiV1MiscLinkedinPostReshare422Error1", ApiV1MiscLinkedinPostReshare422Error1>
      | Declared<"apiV1MiscLinkedinPostReshare429Error1", ApiV1MiscLinkedinPostReshare429Error1>
      | Declared<"apiV1MiscLinkedinPostReshare500Error1", ApiV1MiscLinkedinPostReshare500Error1>
      | Declared<"apiV1MiscLinkedinPostReshare502Error1", ApiV1MiscLinkedinPostReshare502Error1>
      | Declared<"apiV1MiscLinkedinPostReshare503Error1", ApiV1MiscLinkedinPostReshare503Error1>
      | Declared<"apiV1MiscLinkedinPostReshare504Error1", ApiV1MiscLinkedinPostReshare504Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<MiscLinkedinResharePostError> = [
      {
        on: 400,
        kind: "apiV1MiscLinkedinPostReshare400Error1",
        decode: { kind: "json", schema: apiV1MiscLinkedinPostReshare400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1MiscLinkedinPostReshare401Error1",
        decode: { kind: "json", schema: apiV1MiscLinkedinPostReshare401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1MiscLinkedinPostReshare403Error1",
        decode: { kind: "json", schema: apiV1MiscLinkedinPostReshare403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1MiscLinkedinPostReshare404Error1",
        decode: { kind: "json", schema: apiV1MiscLinkedinPostReshare404Error1Schema },
      },
      {
        on: 422,
        kind: "apiV1MiscLinkedinPostReshare422Error1",
        decode: { kind: "json", schema: apiV1MiscLinkedinPostReshare422Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1MiscLinkedinPostReshare429Error1",
        decode: { kind: "json", schema: apiV1MiscLinkedinPostReshare429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1MiscLinkedinPostReshare500Error1",
        decode: { kind: "json", schema: apiV1MiscLinkedinPostReshare500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1MiscLinkedinPostReshare502Error1",
        decode: { kind: "json", schema: apiV1MiscLinkedinPostReshare502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1MiscLinkedinPostReshare503Error1",
        decode: { kind: "json", schema: apiV1MiscLinkedinPostReshare503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1MiscLinkedinPostReshare504Error1",
        decode: { kind: "json", schema: apiV1MiscLinkedinPostReshare504Error1Schema },
      },
    ];
  }

  export type MiscMastodonDeleteCommentRequest = {
    /** Body */
    body?: ApiV1MiscMastodonCommentRequest1;
  };

  export class MiscMastodonDeleteCommentError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1MiscMastodonComment400Error1", ApiV1MiscMastodonComment400Error1>
      | Declared<"apiV1MiscMastodonComment401Error1", ApiV1MiscMastodonComment401Error1>
      | Declared<"apiV1MiscMastodonComment403Error1", ApiV1MiscMastodonComment403Error1>
      | Declared<"apiV1MiscMastodonComment404Error1", ApiV1MiscMastodonComment404Error1>
      | Declared<"apiV1MiscMastodonComment429Error1", ApiV1MiscMastodonComment429Error1>
      | Declared<"apiV1MiscMastodonComment500Error1", ApiV1MiscMastodonComment500Error1>
      | Declared<"apiV1MiscMastodonComment502Error1", ApiV1MiscMastodonComment502Error1>
      | Declared<"apiV1MiscMastodonComment503Error1", ApiV1MiscMastodonComment503Error1>
      | Declared<"apiV1MiscMastodonComment504Error1", ApiV1MiscMastodonComment504Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<MiscMastodonDeleteCommentError> = [
      {
        on: 400,
        kind: "apiV1MiscMastodonComment400Error1",
        decode: { kind: "json", schema: apiV1MiscMastodonComment400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1MiscMastodonComment401Error1",
        decode: { kind: "json", schema: apiV1MiscMastodonComment401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1MiscMastodonComment403Error1",
        decode: { kind: "json", schema: apiV1MiscMastodonComment403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1MiscMastodonComment404Error1",
        decode: { kind: "json", schema: apiV1MiscMastodonComment404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1MiscMastodonComment429Error1",
        decode: { kind: "json", schema: apiV1MiscMastodonComment429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1MiscMastodonComment500Error1",
        decode: { kind: "json", schema: apiV1MiscMastodonComment500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1MiscMastodonComment502Error1",
        decode: { kind: "json", schema: apiV1MiscMastodonComment502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1MiscMastodonComment503Error1",
        decode: { kind: "json", schema: apiV1MiscMastodonComment503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1MiscMastodonComment504Error1",
        decode: { kind: "json", schema: apiV1MiscMastodonComment504Error1Schema },
      },
    ];
  }

  export type MiscMastodonDeleteStatusRequest = {
    /** Body */
    body?: ApiV1MiscMastodonStatusRequest1;
  };

  export class MiscMastodonDeleteStatusError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1MiscMastodonStatus400Error1", ApiV1MiscMastodonStatus400Error1>
      | Declared<"apiV1MiscMastodonStatus401Error1", ApiV1MiscMastodonStatus401Error1>
      | Declared<"apiV1MiscMastodonStatus403Error1", ApiV1MiscMastodonStatus403Error1>
      | Declared<"apiV1MiscMastodonStatus404Error1", ApiV1MiscMastodonStatus404Error1>
      | Declared<"apiV1MiscMastodonStatus429Error1", ApiV1MiscMastodonStatus429Error1>
      | Declared<"apiV1MiscMastodonStatus500Error1", ApiV1MiscMastodonStatus500Error1>
      | Declared<"apiV1MiscMastodonStatus502Error1", ApiV1MiscMastodonStatus502Error1>
      | Declared<"apiV1MiscMastodonStatus503Error1", ApiV1MiscMastodonStatus503Error1>
      | Declared<"apiV1MiscMastodonStatus504Error1", ApiV1MiscMastodonStatus504Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<MiscMastodonDeleteStatusError> = [
      {
        on: 400,
        kind: "apiV1MiscMastodonStatus400Error1",
        decode: { kind: "json", schema: apiV1MiscMastodonStatus400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1MiscMastodonStatus401Error1",
        decode: { kind: "json", schema: apiV1MiscMastodonStatus401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1MiscMastodonStatus403Error1",
        decode: { kind: "json", schema: apiV1MiscMastodonStatus403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1MiscMastodonStatus404Error1",
        decode: { kind: "json", schema: apiV1MiscMastodonStatus404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1MiscMastodonStatus429Error1",
        decode: { kind: "json", schema: apiV1MiscMastodonStatus429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1MiscMastodonStatus500Error1",
        decode: { kind: "json", schema: apiV1MiscMastodonStatus500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1MiscMastodonStatus502Error1",
        decode: { kind: "json", schema: apiV1MiscMastodonStatus502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1MiscMastodonStatus503Error1",
        decode: { kind: "json", schema: apiV1MiscMastodonStatus503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1MiscMastodonStatus504Error1",
        decode: { kind: "json", schema: apiV1MiscMastodonStatus504Error1Schema },
      },
    ];
  }

  export type MiscMastodonEditCommentRequest = {
    /** Body */
    body?: ApiV1MiscMastodonCommentRequest;
  };

  export class MiscMastodonEditCommentError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1MiscMastodonComment400Error1", ApiV1MiscMastodonComment400Error1>
      | Declared<"apiV1MiscMastodonComment401Error1", ApiV1MiscMastodonComment401Error1>
      | Declared<"apiV1MiscMastodonComment403Error1", ApiV1MiscMastodonComment403Error1>
      | Declared<"apiV1MiscMastodonComment404Error1", ApiV1MiscMastodonComment404Error1>
      | Declared<"apiV1MiscMastodonComment429Error1", ApiV1MiscMastodonComment429Error1>
      | Declared<"apiV1MiscMastodonComment500Error1", ApiV1MiscMastodonComment500Error1>
      | Declared<"apiV1MiscMastodonComment502Error1", ApiV1MiscMastodonComment502Error1>
      | Declared<"apiV1MiscMastodonComment503Error1", ApiV1MiscMastodonComment503Error1>
      | Declared<"apiV1MiscMastodonComment504Error1", ApiV1MiscMastodonComment504Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<MiscMastodonEditCommentError> = [
      {
        on: 400,
        kind: "apiV1MiscMastodonComment400Error1",
        decode: { kind: "json", schema: apiV1MiscMastodonComment400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1MiscMastodonComment401Error1",
        decode: { kind: "json", schema: apiV1MiscMastodonComment401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1MiscMastodonComment403Error1",
        decode: { kind: "json", schema: apiV1MiscMastodonComment403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1MiscMastodonComment404Error1",
        decode: { kind: "json", schema: apiV1MiscMastodonComment404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1MiscMastodonComment429Error1",
        decode: { kind: "json", schema: apiV1MiscMastodonComment429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1MiscMastodonComment500Error1",
        decode: { kind: "json", schema: apiV1MiscMastodonComment500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1MiscMastodonComment502Error1",
        decode: { kind: "json", schema: apiV1MiscMastodonComment502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1MiscMastodonComment503Error1",
        decode: { kind: "json", schema: apiV1MiscMastodonComment503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1MiscMastodonComment504Error1",
        decode: { kind: "json", schema: apiV1MiscMastodonComment504Error1Schema },
      },
    ];
  }

  export type MiscMastodonEditStatusRequest = {
    /** Body */
    body?: ApiV1MiscMastodonStatusRequest;
  };

  export class MiscMastodonEditStatusError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1MiscMastodonStatus400Error1", ApiV1MiscMastodonStatus400Error1>
      | Declared<"apiV1MiscMastodonStatus401Error1", ApiV1MiscMastodonStatus401Error1>
      | Declared<"apiV1MiscMastodonStatus403Error1", ApiV1MiscMastodonStatus403Error1>
      | Declared<"apiV1MiscMastodonStatus404Error1", ApiV1MiscMastodonStatus404Error1>
      | Declared<"apiV1MiscMastodonStatus429Error1", ApiV1MiscMastodonStatus429Error1>
      | Declared<"apiV1MiscMastodonStatus500Error1", ApiV1MiscMastodonStatus500Error1>
      | Declared<"apiV1MiscMastodonStatus502Error1", ApiV1MiscMastodonStatus502Error1>
      | Declared<"apiV1MiscMastodonStatus503Error1", ApiV1MiscMastodonStatus503Error1>
      | Declared<"apiV1MiscMastodonStatus504Error1", ApiV1MiscMastodonStatus504Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<MiscMastodonEditStatusError> = [
      {
        on: 400,
        kind: "apiV1MiscMastodonStatus400Error1",
        decode: { kind: "json", schema: apiV1MiscMastodonStatus400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1MiscMastodonStatus401Error1",
        decode: { kind: "json", schema: apiV1MiscMastodonStatus401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1MiscMastodonStatus403Error1",
        decode: { kind: "json", schema: apiV1MiscMastodonStatus403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1MiscMastodonStatus404Error1",
        decode: { kind: "json", schema: apiV1MiscMastodonStatus404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1MiscMastodonStatus429Error1",
        decode: { kind: "json", schema: apiV1MiscMastodonStatus429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1MiscMastodonStatus500Error1",
        decode: { kind: "json", schema: apiV1MiscMastodonStatus500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1MiscMastodonStatus502Error1",
        decode: { kind: "json", schema: apiV1MiscMastodonStatus502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1MiscMastodonStatus503Error1",
        decode: { kind: "json", schema: apiV1MiscMastodonStatus503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1MiscMastodonStatus504Error1",
        decode: { kind: "json", schema: apiV1MiscMastodonStatus504Error1Schema },
      },
    ];
  }

  export type MiscPinterestDeletePinRequest = {
    /** Body */
    body?: ApiV1MiscPinterestPinRequest1;
  };

  export class MiscPinterestDeletePinError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1MiscPinterestPin400Error1", ApiV1MiscPinterestPin400Error1>
      | Declared<"apiV1MiscPinterestPin401Error1", ApiV1MiscPinterestPin401Error1>
      | Declared<"apiV1MiscPinterestPin403Error1", ApiV1MiscPinterestPin403Error1>
      | Declared<"apiV1MiscPinterestPin404Error1", ApiV1MiscPinterestPin404Error1>
      | Declared<"apiV1MiscPinterestPin429Error1", ApiV1MiscPinterestPin429Error1>
      | Declared<"apiV1MiscPinterestPin500Error1", ApiV1MiscPinterestPin500Error1>
      | Declared<"apiV1MiscPinterestPin502Error1", ApiV1MiscPinterestPin502Error1>
      | Declared<"apiV1MiscPinterestPin503Error1", ApiV1MiscPinterestPin503Error1>
      | Declared<"apiV1MiscPinterestPin504Error1", ApiV1MiscPinterestPin504Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<MiscPinterestDeletePinError> = [
      {
        on: 400,
        kind: "apiV1MiscPinterestPin400Error1",
        decode: { kind: "json", schema: apiV1MiscPinterestPin400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1MiscPinterestPin401Error1",
        decode: { kind: "json", schema: apiV1MiscPinterestPin401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1MiscPinterestPin403Error1",
        decode: { kind: "json", schema: apiV1MiscPinterestPin403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1MiscPinterestPin404Error1",
        decode: { kind: "json", schema: apiV1MiscPinterestPin404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1MiscPinterestPin429Error1",
        decode: { kind: "json", schema: apiV1MiscPinterestPin429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1MiscPinterestPin500Error1",
        decode: { kind: "json", schema: apiV1MiscPinterestPin500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1MiscPinterestPin502Error1",
        decode: { kind: "json", schema: apiV1MiscPinterestPin502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1MiscPinterestPin503Error1",
        decode: { kind: "json", schema: apiV1MiscPinterestPin503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1MiscPinterestPin504Error1",
        decode: { kind: "json", schema: apiV1MiscPinterestPin504Error1Schema },
      },
    ];
  }

  export type MiscPinterestEditPinRequest = {
    /** Body */
    body?: ApiV1MiscPinterestPinRequest;
  };

  export class MiscPinterestEditPinError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1MiscPinterestPin400Error1", ApiV1MiscPinterestPin400Error1>
      | Declared<"apiV1MiscPinterestPin401Error1", ApiV1MiscPinterestPin401Error1>
      | Declared<"apiV1MiscPinterestPin403Error1", ApiV1MiscPinterestPin403Error1>
      | Declared<"apiV1MiscPinterestPin404Error1", ApiV1MiscPinterestPin404Error1>
      | Declared<"apiV1MiscPinterestPin429Error1", ApiV1MiscPinterestPin429Error1>
      | Declared<"apiV1MiscPinterestPin500Error1", ApiV1MiscPinterestPin500Error1>
      | Declared<"apiV1MiscPinterestPin502Error1", ApiV1MiscPinterestPin502Error1>
      | Declared<"apiV1MiscPinterestPin503Error1", ApiV1MiscPinterestPin503Error1>
      | Declared<"apiV1MiscPinterestPin504Error1", ApiV1MiscPinterestPin504Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<MiscPinterestEditPinError> = [
      {
        on: 400,
        kind: "apiV1MiscPinterestPin400Error1",
        decode: { kind: "json", schema: apiV1MiscPinterestPin400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1MiscPinterestPin401Error1",
        decode: { kind: "json", schema: apiV1MiscPinterestPin401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1MiscPinterestPin403Error1",
        decode: { kind: "json", schema: apiV1MiscPinterestPin403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1MiscPinterestPin404Error1",
        decode: { kind: "json", schema: apiV1MiscPinterestPin404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1MiscPinterestPin429Error1",
        decode: { kind: "json", schema: apiV1MiscPinterestPin429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1MiscPinterestPin500Error1",
        decode: { kind: "json", schema: apiV1MiscPinterestPin500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1MiscPinterestPin502Error1",
        decode: { kind: "json", schema: apiV1MiscPinterestPin502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1MiscPinterestPin503Error1",
        decode: { kind: "json", schema: apiV1MiscPinterestPin503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1MiscPinterestPin504Error1",
        decode: { kind: "json", schema: apiV1MiscPinterestPin504Error1Schema },
      },
    ];
  }

  export type MiscRedditDeleteCommentRequest = {
    /** Body */
    body?: ApiV1MiscRedditCommentRequest1;
  };

  export class MiscRedditDeleteCommentError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1MiscRedditComment400Error1", ApiV1MiscRedditComment400Error1>
      | Declared<"apiV1MiscRedditComment401Error1", ApiV1MiscRedditComment401Error1>
      | Declared<"apiV1MiscRedditComment403Error1", ApiV1MiscRedditComment403Error1>
      | Declared<"apiV1MiscRedditComment404Error1", ApiV1MiscRedditComment404Error1>
      | Declared<"apiV1MiscRedditComment429Error1", ApiV1MiscRedditComment429Error1>
      | Declared<"apiV1MiscRedditComment500Error1", ApiV1MiscRedditComment500Error1>
      | Declared<"apiV1MiscRedditComment502Error1", ApiV1MiscRedditComment502Error1>
      | Declared<"apiV1MiscRedditComment503Error1", ApiV1MiscRedditComment503Error1>
      | Declared<"apiV1MiscRedditComment504Error1", ApiV1MiscRedditComment504Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<MiscRedditDeleteCommentError> = [
      {
        on: 400,
        kind: "apiV1MiscRedditComment400Error1",
        decode: { kind: "json", schema: apiV1MiscRedditComment400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1MiscRedditComment401Error1",
        decode: { kind: "json", schema: apiV1MiscRedditComment401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1MiscRedditComment403Error1",
        decode: { kind: "json", schema: apiV1MiscRedditComment403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1MiscRedditComment404Error1",
        decode: { kind: "json", schema: apiV1MiscRedditComment404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1MiscRedditComment429Error1",
        decode: { kind: "json", schema: apiV1MiscRedditComment429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1MiscRedditComment500Error1",
        decode: { kind: "json", schema: apiV1MiscRedditComment500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1MiscRedditComment502Error1",
        decode: { kind: "json", schema: apiV1MiscRedditComment502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1MiscRedditComment503Error1",
        decode: { kind: "json", schema: apiV1MiscRedditComment503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1MiscRedditComment504Error1",
        decode: { kind: "json", schema: apiV1MiscRedditComment504Error1Schema },
      },
    ];
  }

  export type MiscRedditDeletePostRequest = {
    /** Body */
    body?: ApiV1MiscRedditPostRequest1;
  };

  export class MiscRedditDeletePostError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1MiscRedditPost400Error1", ApiV1MiscRedditPost400Error1>
      | Declared<"apiV1MiscRedditPost401Error1", ApiV1MiscRedditPost401Error1>
      | Declared<"apiV1MiscRedditPost403Error1", ApiV1MiscRedditPost403Error1>
      | Declared<"apiV1MiscRedditPost404Error1", ApiV1MiscRedditPost404Error1>
      | Declared<"apiV1MiscRedditPost429Error1", ApiV1MiscRedditPost429Error1>
      | Declared<"apiV1MiscRedditPost500Error1", ApiV1MiscRedditPost500Error1>
      | Declared<"apiV1MiscRedditPost502Error1", ApiV1MiscRedditPost502Error1>
      | Declared<"apiV1MiscRedditPost503Error1", ApiV1MiscRedditPost503Error1>
      | Declared<"apiV1MiscRedditPost504Error1", ApiV1MiscRedditPost504Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<MiscRedditDeletePostError> = [
      {
        on: 400,
        kind: "apiV1MiscRedditPost400Error1",
        decode: { kind: "json", schema: apiV1MiscRedditPost400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1MiscRedditPost401Error1",
        decode: { kind: "json", schema: apiV1MiscRedditPost401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1MiscRedditPost403Error1",
        decode: { kind: "json", schema: apiV1MiscRedditPost403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1MiscRedditPost404Error1",
        decode: { kind: "json", schema: apiV1MiscRedditPost404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1MiscRedditPost429Error1",
        decode: { kind: "json", schema: apiV1MiscRedditPost429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1MiscRedditPost500Error1",
        decode: { kind: "json", schema: apiV1MiscRedditPost500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1MiscRedditPost502Error1",
        decode: { kind: "json", schema: apiV1MiscRedditPost502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1MiscRedditPost503Error1",
        decode: { kind: "json", schema: apiV1MiscRedditPost503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1MiscRedditPost504Error1",
        decode: { kind: "json", schema: apiV1MiscRedditPost504Error1Schema },
      },
    ];
  }

  export type MiscRedditEditCommentRequest = {
    /** Body */
    body?: ApiV1MiscRedditCommentRequest;
  };

  export class MiscRedditEditCommentError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1MiscRedditComment400Error1", ApiV1MiscRedditComment400Error1>
      | Declared<"apiV1MiscRedditComment401Error1", ApiV1MiscRedditComment401Error1>
      | Declared<"apiV1MiscRedditComment403Error1", ApiV1MiscRedditComment403Error1>
      | Declared<"apiV1MiscRedditComment404Error1", ApiV1MiscRedditComment404Error1>
      | Declared<"apiV1MiscRedditComment429Error1", ApiV1MiscRedditComment429Error1>
      | Declared<"apiV1MiscRedditComment500Error1", ApiV1MiscRedditComment500Error1>
      | Declared<"apiV1MiscRedditComment502Error1", ApiV1MiscRedditComment502Error1>
      | Declared<"apiV1MiscRedditComment503Error1", ApiV1MiscRedditComment503Error1>
      | Declared<"apiV1MiscRedditComment504Error1", ApiV1MiscRedditComment504Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<MiscRedditEditCommentError> = [
      {
        on: 400,
        kind: "apiV1MiscRedditComment400Error1",
        decode: { kind: "json", schema: apiV1MiscRedditComment400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1MiscRedditComment401Error1",
        decode: { kind: "json", schema: apiV1MiscRedditComment401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1MiscRedditComment403Error1",
        decode: { kind: "json", schema: apiV1MiscRedditComment403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1MiscRedditComment404Error1",
        decode: { kind: "json", schema: apiV1MiscRedditComment404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1MiscRedditComment429Error1",
        decode: { kind: "json", schema: apiV1MiscRedditComment429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1MiscRedditComment500Error1",
        decode: { kind: "json", schema: apiV1MiscRedditComment500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1MiscRedditComment502Error1",
        decode: { kind: "json", schema: apiV1MiscRedditComment502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1MiscRedditComment503Error1",
        decode: { kind: "json", schema: apiV1MiscRedditComment503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1MiscRedditComment504Error1",
        decode: { kind: "json", schema: apiV1MiscRedditComment504Error1Schema },
      },
    ];
  }

  export type MiscRedditEditPostRequest = {
    /** Body */
    body?: ApiV1MiscRedditPostRequest;
  };

  export class MiscRedditEditPostError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1MiscRedditPost400Error1", ApiV1MiscRedditPost400Error1>
      | Declared<"apiV1MiscRedditPost401Error1", ApiV1MiscRedditPost401Error1>
      | Declared<"apiV1MiscRedditPost403Error1", ApiV1MiscRedditPost403Error1>
      | Declared<"apiV1MiscRedditPost404Error1", ApiV1MiscRedditPost404Error1>
      | Declared<"apiV1MiscRedditPost429Error1", ApiV1MiscRedditPost429Error1>
      | Declared<"apiV1MiscRedditPost500Error1", ApiV1MiscRedditPost500Error1>
      | Declared<"apiV1MiscRedditPost502Error1", ApiV1MiscRedditPost502Error1>
      | Declared<"apiV1MiscRedditPost503Error1", ApiV1MiscRedditPost503Error1>
      | Declared<"apiV1MiscRedditPost504Error1", ApiV1MiscRedditPost504Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<MiscRedditEditPostError> = [
      {
        on: 400,
        kind: "apiV1MiscRedditPost400Error1",
        decode: { kind: "json", schema: apiV1MiscRedditPost400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1MiscRedditPost401Error1",
        decode: { kind: "json", schema: apiV1MiscRedditPost401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1MiscRedditPost403Error1",
        decode: { kind: "json", schema: apiV1MiscRedditPost403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1MiscRedditPost404Error1",
        decode: { kind: "json", schema: apiV1MiscRedditPost404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1MiscRedditPost429Error1",
        decode: { kind: "json", schema: apiV1MiscRedditPost429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1MiscRedditPost500Error1",
        decode: { kind: "json", schema: apiV1MiscRedditPost500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1MiscRedditPost502Error1",
        decode: { kind: "json", schema: apiV1MiscRedditPost502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1MiscRedditPost503Error1",
        decode: { kind: "json", schema: apiV1MiscRedditPost503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1MiscRedditPost504Error1",
        decode: { kind: "json", schema: apiV1MiscRedditPost504Error1Schema },
      },
    ];
  }

  export type MiscRedditGetPostRequirementsRequest = {
    teamId: string;
    subreddit: string;
  };

  export class MiscRedditGetPostRequirementsError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1MiscRedditPostRequirements400Error1", ApiV1MiscRedditPostRequirements400Error1>
      | Declared<"apiV1MiscRedditPostRequirements401Error1", ApiV1MiscRedditPostRequirements401Error1>
      | Declared<"apiV1MiscRedditPostRequirements403Error1", ApiV1MiscRedditPostRequirements403Error1>
      | Declared<"apiV1MiscRedditPostRequirements404Error1", ApiV1MiscRedditPostRequirements404Error1>
      | Declared<"apiV1MiscRedditPostRequirements429Error1", ApiV1MiscRedditPostRequirements429Error1>
      | Declared<"apiV1MiscRedditPostRequirements500Error1", ApiV1MiscRedditPostRequirements500Error1>
      | Declared<"apiV1MiscRedditPostRequirements502Error1", ApiV1MiscRedditPostRequirements502Error1>
      | Declared<"apiV1MiscRedditPostRequirements503Error1", ApiV1MiscRedditPostRequirements503Error1>
      | Declared<"apiV1MiscRedditPostRequirements504Error1", ApiV1MiscRedditPostRequirements504Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<MiscRedditGetPostRequirementsError> = [
      {
        on: 400,
        kind: "apiV1MiscRedditPostRequirements400Error1",
        decode: { kind: "json", schema: apiV1MiscRedditPostRequirements400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1MiscRedditPostRequirements401Error1",
        decode: { kind: "json", schema: apiV1MiscRedditPostRequirements401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1MiscRedditPostRequirements403Error1",
        decode: { kind: "json", schema: apiV1MiscRedditPostRequirements403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1MiscRedditPostRequirements404Error1",
        decode: { kind: "json", schema: apiV1MiscRedditPostRequirements404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1MiscRedditPostRequirements429Error1",
        decode: { kind: "json", schema: apiV1MiscRedditPostRequirements429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1MiscRedditPostRequirements500Error1",
        decode: { kind: "json", schema: apiV1MiscRedditPostRequirements500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1MiscRedditPostRequirements502Error1",
        decode: { kind: "json", schema: apiV1MiscRedditPostRequirements502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1MiscRedditPostRequirements503Error1",
        decode: { kind: "json", schema: apiV1MiscRedditPostRequirements503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1MiscRedditPostRequirements504Error1",
        decode: { kind: "json", schema: apiV1MiscRedditPostRequirements504Error1Schema },
      },
    ];
  }

  export type MiscRedditGetSubredditFlairsRequest = {
    teamId: string;
    subreddit: string;
  };

  export class MiscRedditGetSubredditFlairsError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1MiscRedditSubredditFlairs400Error1", ApiV1MiscRedditSubredditFlairs400Error1>
      | Declared<"apiV1MiscRedditSubredditFlairs401Error1", ApiV1MiscRedditSubredditFlairs401Error1>
      | Declared<"apiV1MiscRedditSubredditFlairs403Error1", ApiV1MiscRedditSubredditFlairs403Error1>
      | Declared<"apiV1MiscRedditSubredditFlairs404Error1", ApiV1MiscRedditSubredditFlairs404Error1>
      | Declared<"apiV1MiscRedditSubredditFlairs429Error1", ApiV1MiscRedditSubredditFlairs429Error1>
      | Declared<"apiV1MiscRedditSubredditFlairs500Error1", ApiV1MiscRedditSubredditFlairs500Error1>
      | Declared<"apiV1MiscRedditSubredditFlairs502Error1", ApiV1MiscRedditSubredditFlairs502Error1>
      | Declared<"apiV1MiscRedditSubredditFlairs503Error1", ApiV1MiscRedditSubredditFlairs503Error1>
      | Declared<"apiV1MiscRedditSubredditFlairs504Error1", ApiV1MiscRedditSubredditFlairs504Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<MiscRedditGetSubredditFlairsError> = [
      {
        on: 400,
        kind: "apiV1MiscRedditSubredditFlairs400Error1",
        decode: { kind: "json", schema: apiV1MiscRedditSubredditFlairs400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1MiscRedditSubredditFlairs401Error1",
        decode: { kind: "json", schema: apiV1MiscRedditSubredditFlairs401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1MiscRedditSubredditFlairs403Error1",
        decode: { kind: "json", schema: apiV1MiscRedditSubredditFlairs403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1MiscRedditSubredditFlairs404Error1",
        decode: { kind: "json", schema: apiV1MiscRedditSubredditFlairs404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1MiscRedditSubredditFlairs429Error1",
        decode: { kind: "json", schema: apiV1MiscRedditSubredditFlairs429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1MiscRedditSubredditFlairs500Error1",
        decode: { kind: "json", schema: apiV1MiscRedditSubredditFlairs500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1MiscRedditSubredditFlairs502Error1",
        decode: { kind: "json", schema: apiV1MiscRedditSubredditFlairs502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1MiscRedditSubredditFlairs503Error1",
        decode: { kind: "json", schema: apiV1MiscRedditSubredditFlairs503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1MiscRedditSubredditFlairs504Error1",
        decode: { kind: "json", schema: apiV1MiscRedditSubredditFlairs504Error1Schema },
      },
    ];
  }

  export type MiscSlackDeleteMessageRequest = {
    /** Body */
    body?: ApiV1MiscSlackMessageRequest1;
  };

  export class MiscSlackDeleteMessageError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1MiscSlackMessage400Error1", ApiV1MiscSlackMessage400Error1>
      | Declared<"apiV1MiscSlackMessage401Error1", ApiV1MiscSlackMessage401Error1>
      | Declared<"apiV1MiscSlackMessage403Error1", ApiV1MiscSlackMessage403Error1>
      | Declared<"apiV1MiscSlackMessage404Error1", ApiV1MiscSlackMessage404Error1>
      | Declared<"apiV1MiscSlackMessage429Error1", ApiV1MiscSlackMessage429Error1>
      | Declared<"apiV1MiscSlackMessage500Error1", ApiV1MiscSlackMessage500Error1>
      | Declared<"apiV1MiscSlackMessage502Error1", ApiV1MiscSlackMessage502Error1>
      | Declared<"apiV1MiscSlackMessage503Error1", ApiV1MiscSlackMessage503Error1>
      | Declared<"apiV1MiscSlackMessage504Error1", ApiV1MiscSlackMessage504Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<MiscSlackDeleteMessageError> = [
      {
        on: 400,
        kind: "apiV1MiscSlackMessage400Error1",
        decode: { kind: "json", schema: apiV1MiscSlackMessage400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1MiscSlackMessage401Error1",
        decode: { kind: "json", schema: apiV1MiscSlackMessage401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1MiscSlackMessage403Error1",
        decode: { kind: "json", schema: apiV1MiscSlackMessage403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1MiscSlackMessage404Error1",
        decode: { kind: "json", schema: apiV1MiscSlackMessage404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1MiscSlackMessage429Error1",
        decode: { kind: "json", schema: apiV1MiscSlackMessage429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1MiscSlackMessage500Error1",
        decode: { kind: "json", schema: apiV1MiscSlackMessage500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1MiscSlackMessage502Error1",
        decode: { kind: "json", schema: apiV1MiscSlackMessage502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1MiscSlackMessage503Error1",
        decode: { kind: "json", schema: apiV1MiscSlackMessage503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1MiscSlackMessage504Error1",
        decode: { kind: "json", schema: apiV1MiscSlackMessage504Error1Schema },
      },
    ];
  }

  export type MiscSlackEditMessageRequest = {
    /** Body */
    body?: ApiV1MiscSlackMessageRequest;
  };

  export class MiscSlackEditMessageError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1MiscSlackMessage400Error1", ApiV1MiscSlackMessage400Error1>
      | Declared<"apiV1MiscSlackMessage401Error1", ApiV1MiscSlackMessage401Error1>
      | Declared<"apiV1MiscSlackMessage403Error1", ApiV1MiscSlackMessage403Error1>
      | Declared<"apiV1MiscSlackMessage404Error1", ApiV1MiscSlackMessage404Error1>
      | Declared<"apiV1MiscSlackMessage429Error1", ApiV1MiscSlackMessage429Error1>
      | Declared<"apiV1MiscSlackMessage500Error1", ApiV1MiscSlackMessage500Error1>
      | Declared<"apiV1MiscSlackMessage502Error1", ApiV1MiscSlackMessage502Error1>
      | Declared<"apiV1MiscSlackMessage503Error1", ApiV1MiscSlackMessage503Error1>
      | Declared<"apiV1MiscSlackMessage504Error1", ApiV1MiscSlackMessage504Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<MiscSlackEditMessageError> = [
      {
        on: 400,
        kind: "apiV1MiscSlackMessage400Error1",
        decode: { kind: "json", schema: apiV1MiscSlackMessage400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1MiscSlackMessage401Error1",
        decode: { kind: "json", schema: apiV1MiscSlackMessage401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1MiscSlackMessage403Error1",
        decode: { kind: "json", schema: apiV1MiscSlackMessage403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1MiscSlackMessage404Error1",
        decode: { kind: "json", schema: apiV1MiscSlackMessage404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1MiscSlackMessage429Error1",
        decode: { kind: "json", schema: apiV1MiscSlackMessage429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1MiscSlackMessage500Error1",
        decode: { kind: "json", schema: apiV1MiscSlackMessage500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1MiscSlackMessage502Error1",
        decode: { kind: "json", schema: apiV1MiscSlackMessage502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1MiscSlackMessage503Error1",
        decode: { kind: "json", schema: apiV1MiscSlackMessage503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1MiscSlackMessage504Error1",
        decode: { kind: "json", schema: apiV1MiscSlackMessage504Error1Schema },
      },
    ];
  }

  export type MiscTiktokDeleteCommentRequest = {
    /** Body */
    body?: ApiV1MiscTiktokCommentRequest;
  };

  export class MiscTiktokDeleteCommentError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1MiscTiktokComment400Error1", ApiV1MiscTiktokComment400Error1>
      | Declared<"apiV1MiscTiktokComment401Error1", ApiV1MiscTiktokComment401Error1>
      | Declared<"apiV1MiscTiktokComment403Error1", ApiV1MiscTiktokComment403Error1>
      | Declared<"apiV1MiscTiktokComment404Error1", ApiV1MiscTiktokComment404Error1>
      | Declared<"apiV1MiscTiktokComment429Error1", ApiV1MiscTiktokComment429Error1>
      | Declared<"apiV1MiscTiktokComment500Error1", ApiV1MiscTiktokComment500Error1>
      | Declared<"apiV1MiscTiktokComment502Error1", ApiV1MiscTiktokComment502Error1>
      | Declared<"apiV1MiscTiktokComment503Error1", ApiV1MiscTiktokComment503Error1>
      | Declared<"apiV1MiscTiktokComment504Error1", ApiV1MiscTiktokComment504Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<MiscTiktokDeleteCommentError> = [
      {
        on: 400,
        kind: "apiV1MiscTiktokComment400Error1",
        decode: { kind: "json", schema: apiV1MiscTiktokComment400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1MiscTiktokComment401Error1",
        decode: { kind: "json", schema: apiV1MiscTiktokComment401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1MiscTiktokComment403Error1",
        decode: { kind: "json", schema: apiV1MiscTiktokComment403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1MiscTiktokComment404Error1",
        decode: { kind: "json", schema: apiV1MiscTiktokComment404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1MiscTiktokComment429Error1",
        decode: { kind: "json", schema: apiV1MiscTiktokComment429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1MiscTiktokComment500Error1",
        decode: { kind: "json", schema: apiV1MiscTiktokComment500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1MiscTiktokComment502Error1",
        decode: { kind: "json", schema: apiV1MiscTiktokComment502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1MiscTiktokComment503Error1",
        decode: { kind: "json", schema: apiV1MiscTiktokComment503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1MiscTiktokComment504Error1",
        decode: { kind: "json", schema: apiV1MiscTiktokComment504Error1Schema },
      },
    ];
  }

  export type MiscTiktokGetCommercialMusicTrendingListRequest = {
    teamId: string;
    /** Genre filter for commercial music results. @default Genre.Pop */
    genre?: Genre;
    /** Timeframe for popular tracks ranking. @default DateRange._7Day */
    dateRange?: DateRange;
  };

  export class MiscTiktokGetCommercialMusicTrendingListError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1MiscTiktokCmlTrendingList400Error1", ApiV1MiscTiktokCmlTrendingList400Error1>
      | Declared<"apiV1MiscTiktokCmlTrendingList401Error1", ApiV1MiscTiktokCmlTrendingList401Error1>
      | Declared<"apiV1MiscTiktokCmlTrendingList403Error1", ApiV1MiscTiktokCmlTrendingList403Error1>
      | Declared<"apiV1MiscTiktokCmlTrendingList404Error1", ApiV1MiscTiktokCmlTrendingList404Error1>
      | Declared<"apiV1MiscTiktokCmlTrendingList429Error1", ApiV1MiscTiktokCmlTrendingList429Error1>
      | Declared<"apiV1MiscTiktokCmlTrendingList500Error1", ApiV1MiscTiktokCmlTrendingList500Error1>
      | Declared<"apiV1MiscTiktokCmlTrendingList502Error1", ApiV1MiscTiktokCmlTrendingList502Error1>
      | Declared<"apiV1MiscTiktokCmlTrendingList503Error1", ApiV1MiscTiktokCmlTrendingList503Error1>
      | Declared<"apiV1MiscTiktokCmlTrendingList504Error1", ApiV1MiscTiktokCmlTrendingList504Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<MiscTiktokGetCommercialMusicTrendingListError> = [
      {
        on: 400,
        kind: "apiV1MiscTiktokCmlTrendingList400Error1",
        decode: { kind: "json", schema: apiV1MiscTiktokCmlTrendingList400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1MiscTiktokCmlTrendingList401Error1",
        decode: { kind: "json", schema: apiV1MiscTiktokCmlTrendingList401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1MiscTiktokCmlTrendingList403Error1",
        decode: { kind: "json", schema: apiV1MiscTiktokCmlTrendingList403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1MiscTiktokCmlTrendingList404Error1",
        decode: { kind: "json", schema: apiV1MiscTiktokCmlTrendingList404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1MiscTiktokCmlTrendingList429Error1",
        decode: { kind: "json", schema: apiV1MiscTiktokCmlTrendingList429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1MiscTiktokCmlTrendingList500Error1",
        decode: { kind: "json", schema: apiV1MiscTiktokCmlTrendingList500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1MiscTiktokCmlTrendingList502Error1",
        decode: { kind: "json", schema: apiV1MiscTiktokCmlTrendingList502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1MiscTiktokCmlTrendingList503Error1",
        decode: { kind: "json", schema: apiV1MiscTiktokCmlTrendingList503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1MiscTiktokCmlTrendingList504Error1",
        decode: { kind: "json", schema: apiV1MiscTiktokCmlTrendingList504Error1Schema },
      },
    ];
  }

  export type MiscTiktokGetPostSettingsRequest = {
    teamId: string;
  };

  export class MiscTiktokGetPostSettingsError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1MiscTiktokPostSettings400Error1", ApiV1MiscTiktokPostSettings400Error1>
      | Declared<"apiV1MiscTiktokPostSettings401Error1", ApiV1MiscTiktokPostSettings401Error1>
      | Declared<"apiV1MiscTiktokPostSettings403Error1", ApiV1MiscTiktokPostSettings403Error1>
      | Declared<"apiV1MiscTiktokPostSettings404Error1", ApiV1MiscTiktokPostSettings404Error1>
      | Declared<"apiV1MiscTiktokPostSettings429Error1", ApiV1MiscTiktokPostSettings429Error1>
      | Declared<"apiV1MiscTiktokPostSettings500Error1", ApiV1MiscTiktokPostSettings500Error1>
      | Declared<"apiV1MiscTiktokPostSettings502Error1", ApiV1MiscTiktokPostSettings502Error1>
      | Declared<"apiV1MiscTiktokPostSettings503Error1", ApiV1MiscTiktokPostSettings503Error1>
      | Declared<"apiV1MiscTiktokPostSettings504Error1", ApiV1MiscTiktokPostSettings504Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<MiscTiktokGetPostSettingsError> = [
      {
        on: 400,
        kind: "apiV1MiscTiktokPostSettings400Error1",
        decode: { kind: "json", schema: apiV1MiscTiktokPostSettings400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1MiscTiktokPostSettings401Error1",
        decode: { kind: "json", schema: apiV1MiscTiktokPostSettings401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1MiscTiktokPostSettings403Error1",
        decode: { kind: "json", schema: apiV1MiscTiktokPostSettings403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1MiscTiktokPostSettings404Error1",
        decode: { kind: "json", schema: apiV1MiscTiktokPostSettings404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1MiscTiktokPostSettings429Error1",
        decode: { kind: "json", schema: apiV1MiscTiktokPostSettings429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1MiscTiktokPostSettings500Error1",
        decode: { kind: "json", schema: apiV1MiscTiktokPostSettings500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1MiscTiktokPostSettings502Error1",
        decode: { kind: "json", schema: apiV1MiscTiktokPostSettings502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1MiscTiktokPostSettings503Error1",
        decode: { kind: "json", schema: apiV1MiscTiktokPostSettings503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1MiscTiktokPostSettings504Error1",
        decode: { kind: "json", schema: apiV1MiscTiktokPostSettings504Error1Schema },
      },
    ];
  }

  export type MiscTiktokSearchLocationsRequest = {
    teamId: string;
    /** Free-text query used to search TikTok location tags. */
    q: string;
  };

  export const miscTiktokSearchLocationsRequestSchema: Schema<MiscTiktokSearchLocationsRequest> =
    s.lazySchema(() =>
      s.object<MiscTiktokSearchLocationsRequest>({
        teamId: s.string(),
        q: s.string().check(s.minLength(1), s.maxLength(100)),
      }),
    );

  export class MiscTiktokSearchLocationsError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1MiscTiktokLocations400Error1", ApiV1MiscTiktokLocations400Error1>
      | Declared<"apiV1MiscTiktokLocations401Error1", ApiV1MiscTiktokLocations401Error1>
      | Declared<"apiV1MiscTiktokLocations403Error1", ApiV1MiscTiktokLocations403Error1>
      | Declared<"apiV1MiscTiktokLocations404Error1", ApiV1MiscTiktokLocations404Error1>
      | Declared<"apiV1MiscTiktokLocations429Error1", ApiV1MiscTiktokLocations429Error1>
      | Declared<"apiV1MiscTiktokLocations500Error1", ApiV1MiscTiktokLocations500Error1>
      | Declared<"apiV1MiscTiktokLocations502Error1", ApiV1MiscTiktokLocations502Error1>
      | Declared<"apiV1MiscTiktokLocations503Error1", ApiV1MiscTiktokLocations503Error1>
      | Declared<"apiV1MiscTiktokLocations504Error1", ApiV1MiscTiktokLocations504Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<MiscTiktokSearchLocationsError> = [
      {
        on: 400,
        kind: "apiV1MiscTiktokLocations400Error1",
        decode: { kind: "json", schema: apiV1MiscTiktokLocations400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1MiscTiktokLocations401Error1",
        decode: { kind: "json", schema: apiV1MiscTiktokLocations401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1MiscTiktokLocations403Error1",
        decode: { kind: "json", schema: apiV1MiscTiktokLocations403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1MiscTiktokLocations404Error1",
        decode: { kind: "json", schema: apiV1MiscTiktokLocations404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1MiscTiktokLocations429Error1",
        decode: { kind: "json", schema: apiV1MiscTiktokLocations429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1MiscTiktokLocations500Error1",
        decode: { kind: "json", schema: apiV1MiscTiktokLocations500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1MiscTiktokLocations502Error1",
        decode: { kind: "json", schema: apiV1MiscTiktokLocations502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1MiscTiktokLocations503Error1",
        decode: { kind: "json", schema: apiV1MiscTiktokLocations503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1MiscTiktokLocations504Error1",
        decode: { kind: "json", schema: apiV1MiscTiktokLocations504Error1Schema },
      },
    ];
  }

  export type MiscTwitterDeleteCommentRequest = {
    /** Body */
    body?: ApiV1MiscTwitterCommentRequest;
  };

  export class MiscTwitterDeleteCommentError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1MiscTwitterComment400Error1", ApiV1MiscTwitterComment400Error1>
      | Declared<"apiV1MiscTwitterComment401Error1", ApiV1MiscTwitterComment401Error1>
      | Declared<"apiV1MiscTwitterComment403Error1", ApiV1MiscTwitterComment403Error1>
      | Declared<"apiV1MiscTwitterComment404Error1", ApiV1MiscTwitterComment404Error1>
      | Declared<"apiV1MiscTwitterComment429Error1", ApiV1MiscTwitterComment429Error1>
      | Declared<"apiV1MiscTwitterComment500Error1", ApiV1MiscTwitterComment500Error1>
      | Declared<"apiV1MiscTwitterComment502Error1", ApiV1MiscTwitterComment502Error1>
      | Declared<"apiV1MiscTwitterComment503Error1", ApiV1MiscTwitterComment503Error1>
      | Declared<"apiV1MiscTwitterComment504Error1", ApiV1MiscTwitterComment504Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<MiscTwitterDeleteCommentError> = [
      {
        on: 400,
        kind: "apiV1MiscTwitterComment400Error1",
        decode: { kind: "json", schema: apiV1MiscTwitterComment400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1MiscTwitterComment401Error1",
        decode: { kind: "json", schema: apiV1MiscTwitterComment401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1MiscTwitterComment403Error1",
        decode: { kind: "json", schema: apiV1MiscTwitterComment403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1MiscTwitterComment404Error1",
        decode: { kind: "json", schema: apiV1MiscTwitterComment404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1MiscTwitterComment429Error1",
        decode: { kind: "json", schema: apiV1MiscTwitterComment429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1MiscTwitterComment500Error1",
        decode: { kind: "json", schema: apiV1MiscTwitterComment500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1MiscTwitterComment502Error1",
        decode: { kind: "json", schema: apiV1MiscTwitterComment502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1MiscTwitterComment503Error1",
        decode: { kind: "json", schema: apiV1MiscTwitterComment503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1MiscTwitterComment504Error1",
        decode: { kind: "json", schema: apiV1MiscTwitterComment504Error1Schema },
      },
    ];
  }

  export type MiscTwitterDeleteTweetRequest = {
    /** Body */
    body?: ApiV1MiscTwitterTweetRequest;
  };

  export class MiscTwitterDeleteTweetError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1MiscTwitterTweet400Error1", ApiV1MiscTwitterTweet400Error1>
      | Declared<"apiV1MiscTwitterTweet401Error1", ApiV1MiscTwitterTweet401Error1>
      | Declared<"apiV1MiscTwitterTweet403Error1", ApiV1MiscTwitterTweet403Error1>
      | Declared<"apiV1MiscTwitterTweet404Error1", ApiV1MiscTwitterTweet404Error1>
      | Declared<"apiV1MiscTwitterTweet429Error1", ApiV1MiscTwitterTweet429Error1>
      | Declared<"apiV1MiscTwitterTweet500Error1", ApiV1MiscTwitterTweet500Error1>
      | Declared<"apiV1MiscTwitterTweet502Error1", ApiV1MiscTwitterTweet502Error1>
      | Declared<"apiV1MiscTwitterTweet503Error1", ApiV1MiscTwitterTweet503Error1>
      | Declared<"apiV1MiscTwitterTweet504Error1", ApiV1MiscTwitterTweet504Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<MiscTwitterDeleteTweetError> = [
      {
        on: 400,
        kind: "apiV1MiscTwitterTweet400Error1",
        decode: { kind: "json", schema: apiV1MiscTwitterTweet400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1MiscTwitterTweet401Error1",
        decode: { kind: "json", schema: apiV1MiscTwitterTweet401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1MiscTwitterTweet403Error1",
        decode: { kind: "json", schema: apiV1MiscTwitterTweet403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1MiscTwitterTweet404Error1",
        decode: { kind: "json", schema: apiV1MiscTwitterTweet404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1MiscTwitterTweet429Error1",
        decode: { kind: "json", schema: apiV1MiscTwitterTweet429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1MiscTwitterTweet500Error1",
        decode: { kind: "json", schema: apiV1MiscTwitterTweet500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1MiscTwitterTweet502Error1",
        decode: { kind: "json", schema: apiV1MiscTwitterTweet502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1MiscTwitterTweet503Error1",
        decode: { kind: "json", schema: apiV1MiscTwitterTweet503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1MiscTwitterTweet504Error1",
        decode: { kind: "json", schema: apiV1MiscTwitterTweet504Error1Schema },
      },
    ];
  }

  export type MiscTwitterRetweetRequest = {
    /** Body */
    body?: ApiV1MiscTwitterRetweetRequest;
  };

  export class MiscTwitterRetweetError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1MiscTwitterRetweet400Error1", ApiV1MiscTwitterRetweet400Error1>
      | Declared<"apiV1MiscTwitterRetweet401Error1", ApiV1MiscTwitterRetweet401Error1>
      | Declared<"apiV1MiscTwitterRetweet403Error1", ApiV1MiscTwitterRetweet403Error1>
      | Declared<"apiV1MiscTwitterRetweet404Error1", ApiV1MiscTwitterRetweet404Error1>
      | Declared<"apiV1MiscTwitterRetweet429Error1", ApiV1MiscTwitterRetweet429Error1>
      | Declared<"apiV1MiscTwitterRetweet500Error1", ApiV1MiscTwitterRetweet500Error1>
      | Declared<"apiV1MiscTwitterRetweet502Error1", ApiV1MiscTwitterRetweet502Error1>
      | Declared<"apiV1MiscTwitterRetweet503Error1", ApiV1MiscTwitterRetweet503Error1>
      | Declared<"apiV1MiscTwitterRetweet504Error1", ApiV1MiscTwitterRetweet504Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<MiscTwitterRetweetError> = [
      {
        on: 400,
        kind: "apiV1MiscTwitterRetweet400Error1",
        decode: { kind: "json", schema: apiV1MiscTwitterRetweet400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1MiscTwitterRetweet401Error1",
        decode: { kind: "json", schema: apiV1MiscTwitterRetweet401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1MiscTwitterRetweet403Error1",
        decode: { kind: "json", schema: apiV1MiscTwitterRetweet403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1MiscTwitterRetweet404Error1",
        decode: { kind: "json", schema: apiV1MiscTwitterRetweet404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1MiscTwitterRetweet429Error1",
        decode: { kind: "json", schema: apiV1MiscTwitterRetweet429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1MiscTwitterRetweet500Error1",
        decode: { kind: "json", schema: apiV1MiscTwitterRetweet500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1MiscTwitterRetweet502Error1",
        decode: { kind: "json", schema: apiV1MiscTwitterRetweet502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1MiscTwitterRetweet503Error1",
        decode: { kind: "json", schema: apiV1MiscTwitterRetweet503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1MiscTwitterRetweet504Error1",
        decode: { kind: "json", schema: apiV1MiscTwitterRetweet504Error1Schema },
      },
    ];
  }

  export type MiscTwitterUnretweetRequest = {
    /** Body */
    body?: ApiV1MiscTwitterRetweetRequest;
  };

  export class MiscTwitterUnretweetError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1MiscTwitterRetweet400Error1", ApiV1MiscTwitterRetweet400Error1>
      | Declared<"apiV1MiscTwitterRetweet401Error1", ApiV1MiscTwitterRetweet401Error1>
      | Declared<"apiV1MiscTwitterRetweet403Error1", ApiV1MiscTwitterRetweet403Error1>
      | Declared<"apiV1MiscTwitterRetweet404Error1", ApiV1MiscTwitterRetweet404Error1>
      | Declared<"apiV1MiscTwitterRetweet429Error1", ApiV1MiscTwitterRetweet429Error1>
      | Declared<"apiV1MiscTwitterRetweet500Error1", ApiV1MiscTwitterRetweet500Error1>
      | Declared<"apiV1MiscTwitterRetweet502Error1", ApiV1MiscTwitterRetweet502Error1>
      | Declared<"apiV1MiscTwitterRetweet503Error1", ApiV1MiscTwitterRetweet503Error1>
      | Declared<"apiV1MiscTwitterRetweet504Error1", ApiV1MiscTwitterRetweet504Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<MiscTwitterUnretweetError> = [
      {
        on: 400,
        kind: "apiV1MiscTwitterRetweet400Error1",
        decode: { kind: "json", schema: apiV1MiscTwitterRetweet400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1MiscTwitterRetweet401Error1",
        decode: { kind: "json", schema: apiV1MiscTwitterRetweet401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1MiscTwitterRetweet403Error1",
        decode: { kind: "json", schema: apiV1MiscTwitterRetweet403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1MiscTwitterRetweet404Error1",
        decode: { kind: "json", schema: apiV1MiscTwitterRetweet404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1MiscTwitterRetweet429Error1",
        decode: { kind: "json", schema: apiV1MiscTwitterRetweet429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1MiscTwitterRetweet500Error1",
        decode: { kind: "json", schema: apiV1MiscTwitterRetweet500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1MiscTwitterRetweet502Error1",
        decode: { kind: "json", schema: apiV1MiscTwitterRetweet502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1MiscTwitterRetweet503Error1",
        decode: { kind: "json", schema: apiV1MiscTwitterRetweet503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1MiscTwitterRetweet504Error1",
        decode: { kind: "json", schema: apiV1MiscTwitterRetweet504Error1Schema },
      },
    ];
  }

  export type MiscYoutubeAddVideoToPlaylistRequest = {
    /** Body */
    body?: ApiV1MiscYoutubePlaylistItemsRequest;
  };

  export class MiscYoutubeAddVideoToPlaylistError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1MiscYoutubePlaylistItems400Error1", ApiV1MiscYoutubePlaylistItems400Error1>
      | Declared<"apiV1MiscYoutubePlaylistItems401Error1", ApiV1MiscYoutubePlaylistItems401Error1>
      | Declared<"apiV1MiscYoutubePlaylistItems403Error1", ApiV1MiscYoutubePlaylistItems403Error1>
      | Declared<"apiV1MiscYoutubePlaylistItems404Error1", ApiV1MiscYoutubePlaylistItems404Error1>
      | Declared<"apiV1MiscYoutubePlaylistItems429Error1", ApiV1MiscYoutubePlaylistItems429Error1>
      | Declared<"apiV1MiscYoutubePlaylistItems500Error1", ApiV1MiscYoutubePlaylistItems500Error1>
      | Declared<"apiV1MiscYoutubePlaylistItems502Error1", ApiV1MiscYoutubePlaylistItems502Error1>
      | Declared<"apiV1MiscYoutubePlaylistItems503Error1", ApiV1MiscYoutubePlaylistItems503Error1>
      | Declared<"apiV1MiscYoutubePlaylistItems504Error1", ApiV1MiscYoutubePlaylistItems504Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<MiscYoutubeAddVideoToPlaylistError> = [
      {
        on: 400,
        kind: "apiV1MiscYoutubePlaylistItems400Error1",
        decode: { kind: "json", schema: apiV1MiscYoutubePlaylistItems400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1MiscYoutubePlaylistItems401Error1",
        decode: { kind: "json", schema: apiV1MiscYoutubePlaylistItems401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1MiscYoutubePlaylistItems403Error1",
        decode: { kind: "json", schema: apiV1MiscYoutubePlaylistItems403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1MiscYoutubePlaylistItems404Error1",
        decode: { kind: "json", schema: apiV1MiscYoutubePlaylistItems404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1MiscYoutubePlaylistItems429Error1",
        decode: { kind: "json", schema: apiV1MiscYoutubePlaylistItems429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1MiscYoutubePlaylistItems500Error1",
        decode: { kind: "json", schema: apiV1MiscYoutubePlaylistItems500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1MiscYoutubePlaylistItems502Error1",
        decode: { kind: "json", schema: apiV1MiscYoutubePlaylistItems502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1MiscYoutubePlaylistItems503Error1",
        decode: { kind: "json", schema: apiV1MiscYoutubePlaylistItems503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1MiscYoutubePlaylistItems504Error1",
        decode: { kind: "json", schema: apiV1MiscYoutubePlaylistItems504Error1Schema },
      },
    ];
  }

  export type MiscYoutubeCreateNewChannelPlaylistRequest = {
    /** Body */
    body?: ApiV1MiscYoutubePlaylistRequest;
  };

  export class MiscYoutubeCreateNewChannelPlaylistError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1MiscYoutubePlaylist400Error1", ApiV1MiscYoutubePlaylist400Error1>
      | Declared<"apiV1MiscYoutubePlaylist401Error1", ApiV1MiscYoutubePlaylist401Error1>
      | Declared<"apiV1MiscYoutubePlaylist403Error1", ApiV1MiscYoutubePlaylist403Error1>
      | Declared<"apiV1MiscYoutubePlaylist404Error1", ApiV1MiscYoutubePlaylist404Error1>
      | Declared<"apiV1MiscYoutubePlaylist429Error1", ApiV1MiscYoutubePlaylist429Error1>
      | Declared<"apiV1MiscYoutubePlaylist500Error1", ApiV1MiscYoutubePlaylist500Error1>
      | Declared<"apiV1MiscYoutubePlaylist502Error1", ApiV1MiscYoutubePlaylist502Error1>
      | Declared<"apiV1MiscYoutubePlaylist503Error1", ApiV1MiscYoutubePlaylist503Error1>
      | Declared<"apiV1MiscYoutubePlaylist504Error1", ApiV1MiscYoutubePlaylist504Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<MiscYoutubeCreateNewChannelPlaylistError> = [
      {
        on: 400,
        kind: "apiV1MiscYoutubePlaylist400Error1",
        decode: { kind: "json", schema: apiV1MiscYoutubePlaylist400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1MiscYoutubePlaylist401Error1",
        decode: { kind: "json", schema: apiV1MiscYoutubePlaylist401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1MiscYoutubePlaylist403Error1",
        decode: { kind: "json", schema: apiV1MiscYoutubePlaylist403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1MiscYoutubePlaylist404Error1",
        decode: { kind: "json", schema: apiV1MiscYoutubePlaylist404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1MiscYoutubePlaylist429Error1",
        decode: { kind: "json", schema: apiV1MiscYoutubePlaylist429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1MiscYoutubePlaylist500Error1",
        decode: { kind: "json", schema: apiV1MiscYoutubePlaylist500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1MiscYoutubePlaylist502Error1",
        decode: { kind: "json", schema: apiV1MiscYoutubePlaylist502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1MiscYoutubePlaylist503Error1",
        decode: { kind: "json", schema: apiV1MiscYoutubePlaylist503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1MiscYoutubePlaylist504Error1",
        decode: { kind: "json", schema: apiV1MiscYoutubePlaylist504Error1Schema },
      },
    ];
  }

  export type MiscYoutubeDeleteChannelPlaylistRequest = {
    playlistId: string;
    teamId: string;
  };

  export class MiscYoutubeDeleteChannelPlaylistError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1MiscYoutubePlaylist400Error1", ApiV1MiscYoutubePlaylist400Error1>
      | Declared<"apiV1MiscYoutubePlaylist401Error1", ApiV1MiscYoutubePlaylist401Error1>
      | Declared<"apiV1MiscYoutubePlaylist403Error1", ApiV1MiscYoutubePlaylist403Error1>
      | Declared<"apiV1MiscYoutubePlaylist404Error1", ApiV1MiscYoutubePlaylist404Error1>
      | Declared<"apiV1MiscYoutubePlaylist429Error1", ApiV1MiscYoutubePlaylist429Error1>
      | Declared<"apiV1MiscYoutubePlaylist500Error1", ApiV1MiscYoutubePlaylist500Error1>
      | Declared<"apiV1MiscYoutubePlaylist502Error1", ApiV1MiscYoutubePlaylist502Error1>
      | Declared<"apiV1MiscYoutubePlaylist503Error1", ApiV1MiscYoutubePlaylist503Error1>
      | Declared<"apiV1MiscYoutubePlaylist504Error1", ApiV1MiscYoutubePlaylist504Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<MiscYoutubeDeleteChannelPlaylistError> = [
      {
        on: 400,
        kind: "apiV1MiscYoutubePlaylist400Error1",
        decode: { kind: "json", schema: apiV1MiscYoutubePlaylist400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1MiscYoutubePlaylist401Error1",
        decode: { kind: "json", schema: apiV1MiscYoutubePlaylist401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1MiscYoutubePlaylist403Error1",
        decode: { kind: "json", schema: apiV1MiscYoutubePlaylist403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1MiscYoutubePlaylist404Error1",
        decode: { kind: "json", schema: apiV1MiscYoutubePlaylist404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1MiscYoutubePlaylist429Error1",
        decode: { kind: "json", schema: apiV1MiscYoutubePlaylist429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1MiscYoutubePlaylist500Error1",
        decode: { kind: "json", schema: apiV1MiscYoutubePlaylist500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1MiscYoutubePlaylist502Error1",
        decode: { kind: "json", schema: apiV1MiscYoutubePlaylist502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1MiscYoutubePlaylist503Error1",
        decode: { kind: "json", schema: apiV1MiscYoutubePlaylist503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1MiscYoutubePlaylist504Error1",
        decode: { kind: "json", schema: apiV1MiscYoutubePlaylist504Error1Schema },
      },
    ];
  }

  export type MiscYoutubeDeleteCommentRequest = {
    /** Body */
    body?: ApiV1MiscYoutubeCommentRequest1;
  };

  export class MiscYoutubeDeleteCommentError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1MiscYoutubeComment400Error1", ApiV1MiscYoutubeComment400Error1>
      | Declared<"apiV1MiscYoutubeComment401Error1", ApiV1MiscYoutubeComment401Error1>
      | Declared<"apiV1MiscYoutubeComment403Error1", ApiV1MiscYoutubeComment403Error1>
      | Declared<"apiV1MiscYoutubeComment404Error1", ApiV1MiscYoutubeComment404Error1>
      | Declared<"apiV1MiscYoutubeComment429Error1", ApiV1MiscYoutubeComment429Error1>
      | Declared<"apiV1MiscYoutubeComment500Error1", ApiV1MiscYoutubeComment500Error1>
      | Declared<"apiV1MiscYoutubeComment502Error1", ApiV1MiscYoutubeComment502Error1>
      | Declared<"apiV1MiscYoutubeComment503Error1", ApiV1MiscYoutubeComment503Error1>
      | Declared<"apiV1MiscYoutubeComment504Error1", ApiV1MiscYoutubeComment504Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<MiscYoutubeDeleteCommentError> = [
      {
        on: 400,
        kind: "apiV1MiscYoutubeComment400Error1",
        decode: { kind: "json", schema: apiV1MiscYoutubeComment400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1MiscYoutubeComment401Error1",
        decode: { kind: "json", schema: apiV1MiscYoutubeComment401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1MiscYoutubeComment403Error1",
        decode: { kind: "json", schema: apiV1MiscYoutubeComment403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1MiscYoutubeComment404Error1",
        decode: { kind: "json", schema: apiV1MiscYoutubeComment404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1MiscYoutubeComment429Error1",
        decode: { kind: "json", schema: apiV1MiscYoutubeComment429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1MiscYoutubeComment500Error1",
        decode: { kind: "json", schema: apiV1MiscYoutubeComment500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1MiscYoutubeComment502Error1",
        decode: { kind: "json", schema: apiV1MiscYoutubeComment502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1MiscYoutubeComment503Error1",
        decode: { kind: "json", schema: apiV1MiscYoutubeComment503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1MiscYoutubeComment504Error1",
        decode: { kind: "json", schema: apiV1MiscYoutubeComment504Error1Schema },
      },
    ];
  }

  export type MiscYoutubeDeleteVideoRequest = {
    /** Body */
    body?: ApiV1MiscYoutubeVideoRequest1;
  };

  export class MiscYoutubeDeleteVideoError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1MiscYoutubeVideo400Error1", ApiV1MiscYoutubeVideo400Error1>
      | Declared<"apiV1MiscYoutubeVideo401Error1", ApiV1MiscYoutubeVideo401Error1>
      | Declared<"apiV1MiscYoutubeVideo403Error1", ApiV1MiscYoutubeVideo403Error1>
      | Declared<"apiV1MiscYoutubeVideo404Error1", ApiV1MiscYoutubeVideo404Error1>
      | Declared<"apiV1MiscYoutubeVideo429Error1", ApiV1MiscYoutubeVideo429Error1>
      | Declared<"apiV1MiscYoutubeVideo500Error1", ApiV1MiscYoutubeVideo500Error1>
      | Declared<"apiV1MiscYoutubeVideo502Error1", ApiV1MiscYoutubeVideo502Error1>
      | Declared<"apiV1MiscYoutubeVideo503Error1", ApiV1MiscYoutubeVideo503Error1>
      | Declared<"apiV1MiscYoutubeVideo504Error1", ApiV1MiscYoutubeVideo504Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<MiscYoutubeDeleteVideoError> = [
      {
        on: 400,
        kind: "apiV1MiscYoutubeVideo400Error1",
        decode: { kind: "json", schema: apiV1MiscYoutubeVideo400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1MiscYoutubeVideo401Error1",
        decode: { kind: "json", schema: apiV1MiscYoutubeVideo401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1MiscYoutubeVideo403Error1",
        decode: { kind: "json", schema: apiV1MiscYoutubeVideo403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1MiscYoutubeVideo404Error1",
        decode: { kind: "json", schema: apiV1MiscYoutubeVideo404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1MiscYoutubeVideo429Error1",
        decode: { kind: "json", schema: apiV1MiscYoutubeVideo429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1MiscYoutubeVideo500Error1",
        decode: { kind: "json", schema: apiV1MiscYoutubeVideo500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1MiscYoutubeVideo502Error1",
        decode: { kind: "json", schema: apiV1MiscYoutubeVideo502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1MiscYoutubeVideo503Error1",
        decode: { kind: "json", schema: apiV1MiscYoutubeVideo503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1MiscYoutubeVideo504Error1",
        decode: { kind: "json", schema: apiV1MiscYoutubeVideo504Error1Schema },
      },
    ];
  }

  export type MiscYoutubeDeleteVideoFromPlaylistRequest = {
    /** Playlist item ID (not video ID) */
    playlistItemId: string;
    teamId: string;
  };

  export class MiscYoutubeDeleteVideoFromPlaylistError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1MiscYoutubePlaylistItems400Error1", ApiV1MiscYoutubePlaylistItems400Error1>
      | Declared<"apiV1MiscYoutubePlaylistItems401Error1", ApiV1MiscYoutubePlaylistItems401Error1>
      | Declared<"apiV1MiscYoutubePlaylistItems403Error1", ApiV1MiscYoutubePlaylistItems403Error1>
      | Declared<"apiV1MiscYoutubePlaylistItems404Error1", ApiV1MiscYoutubePlaylistItems404Error1>
      | Declared<"apiV1MiscYoutubePlaylistItems429Error1", ApiV1MiscYoutubePlaylistItems429Error1>
      | Declared<"apiV1MiscYoutubePlaylistItems500Error1", ApiV1MiscYoutubePlaylistItems500Error1>
      | Declared<"apiV1MiscYoutubePlaylistItems502Error1", ApiV1MiscYoutubePlaylistItems502Error1>
      | Declared<"apiV1MiscYoutubePlaylistItems503Error1", ApiV1MiscYoutubePlaylistItems503Error1>
      | Declared<"apiV1MiscYoutubePlaylistItems504Error1", ApiV1MiscYoutubePlaylistItems504Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<MiscYoutubeDeleteVideoFromPlaylistError> = [
      {
        on: 400,
        kind: "apiV1MiscYoutubePlaylistItems400Error1",
        decode: { kind: "json", schema: apiV1MiscYoutubePlaylistItems400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1MiscYoutubePlaylistItems401Error1",
        decode: { kind: "json", schema: apiV1MiscYoutubePlaylistItems401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1MiscYoutubePlaylistItems403Error1",
        decode: { kind: "json", schema: apiV1MiscYoutubePlaylistItems403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1MiscYoutubePlaylistItems404Error1",
        decode: { kind: "json", schema: apiV1MiscYoutubePlaylistItems404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1MiscYoutubePlaylistItems429Error1",
        decode: { kind: "json", schema: apiV1MiscYoutubePlaylistItems429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1MiscYoutubePlaylistItems500Error1",
        decode: { kind: "json", schema: apiV1MiscYoutubePlaylistItems500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1MiscYoutubePlaylistItems502Error1",
        decode: { kind: "json", schema: apiV1MiscYoutubePlaylistItems502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1MiscYoutubePlaylistItems503Error1",
        decode: { kind: "json", schema: apiV1MiscYoutubePlaylistItems503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1MiscYoutubePlaylistItems504Error1",
        decode: { kind: "json", schema: apiV1MiscYoutubePlaylistItems504Error1Schema },
      },
    ];
  }

  export type MiscYoutubeEditCommentRequest = {
    /** Body */
    body?: ApiV1MiscYoutubeCommentRequest;
  };

  export class MiscYoutubeEditCommentError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1MiscYoutubeComment400Error1", ApiV1MiscYoutubeComment400Error1>
      | Declared<"apiV1MiscYoutubeComment401Error1", ApiV1MiscYoutubeComment401Error1>
      | Declared<"apiV1MiscYoutubeComment403Error1", ApiV1MiscYoutubeComment403Error1>
      | Declared<"apiV1MiscYoutubeComment404Error1", ApiV1MiscYoutubeComment404Error1>
      | Declared<"apiV1MiscYoutubeComment429Error1", ApiV1MiscYoutubeComment429Error1>
      | Declared<"apiV1MiscYoutubeComment500Error1", ApiV1MiscYoutubeComment500Error1>
      | Declared<"apiV1MiscYoutubeComment502Error1", ApiV1MiscYoutubeComment502Error1>
      | Declared<"apiV1MiscYoutubeComment503Error1", ApiV1MiscYoutubeComment503Error1>
      | Declared<"apiV1MiscYoutubeComment504Error1", ApiV1MiscYoutubeComment504Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<MiscYoutubeEditCommentError> = [
      {
        on: 400,
        kind: "apiV1MiscYoutubeComment400Error1",
        decode: { kind: "json", schema: apiV1MiscYoutubeComment400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1MiscYoutubeComment401Error1",
        decode: { kind: "json", schema: apiV1MiscYoutubeComment401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1MiscYoutubeComment403Error1",
        decode: { kind: "json", schema: apiV1MiscYoutubeComment403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1MiscYoutubeComment404Error1",
        decode: { kind: "json", schema: apiV1MiscYoutubeComment404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1MiscYoutubeComment429Error1",
        decode: { kind: "json", schema: apiV1MiscYoutubeComment429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1MiscYoutubeComment500Error1",
        decode: { kind: "json", schema: apiV1MiscYoutubeComment500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1MiscYoutubeComment502Error1",
        decode: { kind: "json", schema: apiV1MiscYoutubeComment502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1MiscYoutubeComment503Error1",
        decode: { kind: "json", schema: apiV1MiscYoutubeComment503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1MiscYoutubeComment504Error1",
        decode: { kind: "json", schema: apiV1MiscYoutubeComment504Error1Schema },
      },
    ];
  }

  export type MiscYoutubeEditVideoRequest = {
    /** Body */
    body?: ApiV1MiscYoutubeVideoRequest;
  };

  export class MiscYoutubeEditVideoError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1MiscYoutubeVideo400Error1", ApiV1MiscYoutubeVideo400Error1>
      | Declared<"apiV1MiscYoutubeVideo401Error1", ApiV1MiscYoutubeVideo401Error1>
      | Declared<"apiV1MiscYoutubeVideo403Error1", ApiV1MiscYoutubeVideo403Error1>
      | Declared<"apiV1MiscYoutubeVideo404Error1", ApiV1MiscYoutubeVideo404Error1>
      | Declared<"apiV1MiscYoutubeVideo429Error1", ApiV1MiscYoutubeVideo429Error1>
      | Declared<"apiV1MiscYoutubeVideo500Error1", ApiV1MiscYoutubeVideo500Error1>
      | Declared<"apiV1MiscYoutubeVideo502Error1", ApiV1MiscYoutubeVideo502Error1>
      | Declared<"apiV1MiscYoutubeVideo503Error1", ApiV1MiscYoutubeVideo503Error1>
      | Declared<"apiV1MiscYoutubeVideo504Error1", ApiV1MiscYoutubeVideo504Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<MiscYoutubeEditVideoError> = [
      {
        on: 400,
        kind: "apiV1MiscYoutubeVideo400Error1",
        decode: { kind: "json", schema: apiV1MiscYoutubeVideo400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1MiscYoutubeVideo401Error1",
        decode: { kind: "json", schema: apiV1MiscYoutubeVideo401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1MiscYoutubeVideo403Error1",
        decode: { kind: "json", schema: apiV1MiscYoutubeVideo403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1MiscYoutubeVideo404Error1",
        decode: { kind: "json", schema: apiV1MiscYoutubeVideo404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1MiscYoutubeVideo429Error1",
        decode: { kind: "json", schema: apiV1MiscYoutubeVideo429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1MiscYoutubeVideo500Error1",
        decode: { kind: "json", schema: apiV1MiscYoutubeVideo500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1MiscYoutubeVideo502Error1",
        decode: { kind: "json", schema: apiV1MiscYoutubeVideo502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1MiscYoutubeVideo503Error1",
        decode: { kind: "json", schema: apiV1MiscYoutubeVideo503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1MiscYoutubeVideo504Error1",
        decode: { kind: "json", schema: apiV1MiscYoutubeVideo504Error1Schema },
      },
    ];
  }

  export type MiscYoutubeGetChannelPlaylistRequest = {
    teamId: string;
    /** @default 10 */
    maxResults?: number;
  };

  export const miscYoutubeGetChannelPlaylistRequestSchema: Schema<MiscYoutubeGetChannelPlaylistRequest> =
    s.lazySchema(() =>
      s.object<MiscYoutubeGetChannelPlaylistRequest>({
        teamId: s.string(),
        maxResults: s.defaulted(s.int().check(s.gte(1), s.lte(20)), 10),
      }),
    );

  export class MiscYoutubeGetChannelPlaylistError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1MiscYoutubePlaylist400Error1", ApiV1MiscYoutubePlaylist400Error1>
      | Declared<"apiV1MiscYoutubePlaylist401Error1", ApiV1MiscYoutubePlaylist401Error1>
      | Declared<"apiV1MiscYoutubePlaylist403Error1", ApiV1MiscYoutubePlaylist403Error1>
      | Declared<"apiV1MiscYoutubePlaylist404Error1", ApiV1MiscYoutubePlaylist404Error1>
      | Declared<"apiV1MiscYoutubePlaylist429Error1", ApiV1MiscYoutubePlaylist429Error1>
      | Declared<"apiV1MiscYoutubePlaylist500Error1", ApiV1MiscYoutubePlaylist500Error1>
      | Declared<"apiV1MiscYoutubePlaylist502Error1", ApiV1MiscYoutubePlaylist502Error1>
      | Declared<"apiV1MiscYoutubePlaylist503Error1", ApiV1MiscYoutubePlaylist503Error1>
      | Declared<"apiV1MiscYoutubePlaylist504Error1", ApiV1MiscYoutubePlaylist504Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<MiscYoutubeGetChannelPlaylistError> = [
      {
        on: 400,
        kind: "apiV1MiscYoutubePlaylist400Error1",
        decode: { kind: "json", schema: apiV1MiscYoutubePlaylist400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1MiscYoutubePlaylist401Error1",
        decode: { kind: "json", schema: apiV1MiscYoutubePlaylist401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1MiscYoutubePlaylist403Error1",
        decode: { kind: "json", schema: apiV1MiscYoutubePlaylist403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1MiscYoutubePlaylist404Error1",
        decode: { kind: "json", schema: apiV1MiscYoutubePlaylist404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1MiscYoutubePlaylist429Error1",
        decode: { kind: "json", schema: apiV1MiscYoutubePlaylist429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1MiscYoutubePlaylist500Error1",
        decode: { kind: "json", schema: apiV1MiscYoutubePlaylist500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1MiscYoutubePlaylist502Error1",
        decode: { kind: "json", schema: apiV1MiscYoutubePlaylist502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1MiscYoutubePlaylist503Error1",
        decode: { kind: "json", schema: apiV1MiscYoutubePlaylist503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1MiscYoutubePlaylist504Error1",
        decode: { kind: "json", schema: apiV1MiscYoutubePlaylist504Error1Schema },
      },
    ];
  }

  export type MiscYoutubeGetRegionsRequest = {
    teamId: string;
  };

  export class MiscYoutubeGetRegionsError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1MiscYoutubeRegions400Error1", ApiV1MiscYoutubeRegions400Error1>
      | Declared<"apiV1MiscYoutubeRegions401Error1", ApiV1MiscYoutubeRegions401Error1>
      | Declared<"apiV1MiscYoutubeRegions403Error1", ApiV1MiscYoutubeRegions403Error1>
      | Declared<"apiV1MiscYoutubeRegions404Error1", ApiV1MiscYoutubeRegions404Error1>
      | Declared<"apiV1MiscYoutubeRegions429Error1", ApiV1MiscYoutubeRegions429Error1>
      | Declared<"apiV1MiscYoutubeRegions500Error1", ApiV1MiscYoutubeRegions500Error1>
      | Declared<"apiV1MiscYoutubeRegions502Error1", ApiV1MiscYoutubeRegions502Error1>
      | Declared<"apiV1MiscYoutubeRegions503Error1", ApiV1MiscYoutubeRegions503Error1>
      | Declared<"apiV1MiscYoutubeRegions504Error1", ApiV1MiscYoutubeRegions504Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<MiscYoutubeGetRegionsError> = [
      {
        on: 400,
        kind: "apiV1MiscYoutubeRegions400Error1",
        decode: { kind: "json", schema: apiV1MiscYoutubeRegions400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1MiscYoutubeRegions401Error1",
        decode: { kind: "json", schema: apiV1MiscYoutubeRegions401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1MiscYoutubeRegions403Error1",
        decode: { kind: "json", schema: apiV1MiscYoutubeRegions403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1MiscYoutubeRegions404Error1",
        decode: { kind: "json", schema: apiV1MiscYoutubeRegions404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1MiscYoutubeRegions429Error1",
        decode: { kind: "json", schema: apiV1MiscYoutubeRegions429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1MiscYoutubeRegions500Error1",
        decode: { kind: "json", schema: apiV1MiscYoutubeRegions500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1MiscYoutubeRegions502Error1",
        decode: { kind: "json", schema: apiV1MiscYoutubeRegions502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1MiscYoutubeRegions503Error1",
        decode: { kind: "json", schema: apiV1MiscYoutubeRegions503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1MiscYoutubeRegions504Error1",
        decode: { kind: "json", schema: apiV1MiscYoutubeRegions504Error1Schema },
      },
    ];
  }

  export type MiscYoutubeGetVideoCategoriesRequest = {
    teamId: string;
    /** ISO 3166-1 alpha-2 country code (e.g., 'US', 'GB', 'PL'). Defaults to 'US' */
    regionCode?: string;
  };

  export class MiscYoutubeGetVideoCategoriesError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1MiscYoutubeVideoCategories400Error1", ApiV1MiscYoutubeVideoCategories400Error1>
      | Declared<"apiV1MiscYoutubeVideoCategories401Error1", ApiV1MiscYoutubeVideoCategories401Error1>
      | Declared<"apiV1MiscYoutubeVideoCategories403Error1", ApiV1MiscYoutubeVideoCategories403Error1>
      | Declared<"apiV1MiscYoutubeVideoCategories404Error1", ApiV1MiscYoutubeVideoCategories404Error1>
      | Declared<"apiV1MiscYoutubeVideoCategories429Error1", ApiV1MiscYoutubeVideoCategories429Error1>
      | Declared<"apiV1MiscYoutubeVideoCategories500Error1", ApiV1MiscYoutubeVideoCategories500Error1>
      | Declared<"apiV1MiscYoutubeVideoCategories502Error1", ApiV1MiscYoutubeVideoCategories502Error1>
      | Declared<"apiV1MiscYoutubeVideoCategories503Error1", ApiV1MiscYoutubeVideoCategories503Error1>
      | Declared<"apiV1MiscYoutubeVideoCategories504Error1", ApiV1MiscYoutubeVideoCategories504Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<MiscYoutubeGetVideoCategoriesError> = [
      {
        on: 400,
        kind: "apiV1MiscYoutubeVideoCategories400Error1",
        decode: { kind: "json", schema: apiV1MiscYoutubeVideoCategories400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1MiscYoutubeVideoCategories401Error1",
        decode: { kind: "json", schema: apiV1MiscYoutubeVideoCategories401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1MiscYoutubeVideoCategories403Error1",
        decode: { kind: "json", schema: apiV1MiscYoutubeVideoCategories403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1MiscYoutubeVideoCategories404Error1",
        decode: { kind: "json", schema: apiV1MiscYoutubeVideoCategories404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1MiscYoutubeVideoCategories429Error1",
        decode: { kind: "json", schema: apiV1MiscYoutubeVideoCategories429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1MiscYoutubeVideoCategories500Error1",
        decode: { kind: "json", schema: apiV1MiscYoutubeVideoCategories500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1MiscYoutubeVideoCategories502Error1",
        decode: { kind: "json", schema: apiV1MiscYoutubeVideoCategories502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1MiscYoutubeVideoCategories503Error1",
        decode: { kind: "json", schema: apiV1MiscYoutubeVideoCategories503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1MiscYoutubeVideoCategories504Error1",
        decode: { kind: "json", schema: apiV1MiscYoutubeVideoCategories504Error1Schema },
      },
    ];
  }

  export type MiscYoutubeGetVideosFromPlaylistRequest = {
    teamId: string;
    playlistId: string;
    /** @default 10 */
    maxResults?: number;
  };

  export const miscYoutubeGetVideosFromPlaylistRequestSchema: Schema<MiscYoutubeGetVideosFromPlaylistRequest> =
    s.lazySchema(() =>
      s.object<MiscYoutubeGetVideosFromPlaylistRequest>({
        teamId: s.string(),
        playlistId: s.string(),
        maxResults: s.defaulted(s.int().check(s.gte(1), s.lte(20)), 10),
      }),
    );

  export class MiscYoutubeGetVideosFromPlaylistError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1MiscYoutubePlaylistItems400Error1", ApiV1MiscYoutubePlaylistItems400Error1>
      | Declared<"apiV1MiscYoutubePlaylistItems401Error1", ApiV1MiscYoutubePlaylistItems401Error1>
      | Declared<"apiV1MiscYoutubePlaylistItems403Error1", ApiV1MiscYoutubePlaylistItems403Error1>
      | Declared<"apiV1MiscYoutubePlaylistItems404Error1", ApiV1MiscYoutubePlaylistItems404Error1>
      | Declared<"apiV1MiscYoutubePlaylistItems429Error1", ApiV1MiscYoutubePlaylistItems429Error1>
      | Declared<"apiV1MiscYoutubePlaylistItems500Error1", ApiV1MiscYoutubePlaylistItems500Error1>
      | Declared<"apiV1MiscYoutubePlaylistItems502Error1", ApiV1MiscYoutubePlaylistItems502Error1>
      | Declared<"apiV1MiscYoutubePlaylistItems503Error1", ApiV1MiscYoutubePlaylistItems503Error1>
      | Declared<"apiV1MiscYoutubePlaylistItems504Error1", ApiV1MiscYoutubePlaylistItems504Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<MiscYoutubeGetVideosFromPlaylistError> = [
      {
        on: 400,
        kind: "apiV1MiscYoutubePlaylistItems400Error1",
        decode: { kind: "json", schema: apiV1MiscYoutubePlaylistItems400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1MiscYoutubePlaylistItems401Error1",
        decode: { kind: "json", schema: apiV1MiscYoutubePlaylistItems401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1MiscYoutubePlaylistItems403Error1",
        decode: { kind: "json", schema: apiV1MiscYoutubePlaylistItems403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1MiscYoutubePlaylistItems404Error1",
        decode: { kind: "json", schema: apiV1MiscYoutubePlaylistItems404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1MiscYoutubePlaylistItems429Error1",
        decode: { kind: "json", schema: apiV1MiscYoutubePlaylistItems429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1MiscYoutubePlaylistItems500Error1",
        decode: { kind: "json", schema: apiV1MiscYoutubePlaylistItems500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1MiscYoutubePlaylistItems502Error1",
        decode: { kind: "json", schema: apiV1MiscYoutubePlaylistItems502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1MiscYoutubePlaylistItems503Error1",
        decode: { kind: "json", schema: apiV1MiscYoutubePlaylistItems503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1MiscYoutubePlaylistItems504Error1",
        decode: { kind: "json", schema: apiV1MiscYoutubePlaylistItems504Error1Schema },
      },
    ];
  }

  export type MiscYoutubeSetThumbnailRequest = {
    /** Body */
    body?: ApiV1MiscYoutubeThumbnailRequest;
  };

  export class MiscYoutubeSetThumbnailError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1MiscYoutubeThumbnail400Error1", ApiV1MiscYoutubeThumbnail400Error1>
      | Declared<"apiV1MiscYoutubeThumbnail401Error1", ApiV1MiscYoutubeThumbnail401Error1>
      | Declared<"apiV1MiscYoutubeThumbnail403Error1", ApiV1MiscYoutubeThumbnail403Error1>
      | Declared<"apiV1MiscYoutubeThumbnail404Error1", ApiV1MiscYoutubeThumbnail404Error1>
      | Declared<"apiV1MiscYoutubeThumbnail429Error1", ApiV1MiscYoutubeThumbnail429Error1>
      | Declared<"apiV1MiscYoutubeThumbnail500Error1", ApiV1MiscYoutubeThumbnail500Error1>
      | Declared<"apiV1MiscYoutubeThumbnail502Error1", ApiV1MiscYoutubeThumbnail502Error1>
      | Declared<"apiV1MiscYoutubeThumbnail503Error1", ApiV1MiscYoutubeThumbnail503Error1>
      | Declared<"apiV1MiscYoutubeThumbnail504Error1", ApiV1MiscYoutubeThumbnail504Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<MiscYoutubeSetThumbnailError> = [
      {
        on: 400,
        kind: "apiV1MiscYoutubeThumbnail400Error1",
        decode: { kind: "json", schema: apiV1MiscYoutubeThumbnail400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1MiscYoutubeThumbnail401Error1",
        decode: { kind: "json", schema: apiV1MiscYoutubeThumbnail401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1MiscYoutubeThumbnail403Error1",
        decode: { kind: "json", schema: apiV1MiscYoutubeThumbnail403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1MiscYoutubeThumbnail404Error1",
        decode: { kind: "json", schema: apiV1MiscYoutubeThumbnail404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1MiscYoutubeThumbnail429Error1",
        decode: { kind: "json", schema: apiV1MiscYoutubeThumbnail429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1MiscYoutubeThumbnail500Error1",
        decode: { kind: "json", schema: apiV1MiscYoutubeThumbnail500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1MiscYoutubeThumbnail502Error1",
        decode: { kind: "json", schema: apiV1MiscYoutubeThumbnail502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1MiscYoutubeThumbnail503Error1",
        decode: { kind: "json", schema: apiV1MiscYoutubeThumbnail503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1MiscYoutubeThumbnail504Error1",
        decode: { kind: "json", schema: apiV1MiscYoutubeThumbnail504Error1Schema },
      },
    ];
  }

  export type MiscYoutubeUpdateChannelPlaylistRequest = {
    /** Body */
    body?: ApiV1MiscYoutubePlaylistRequest1;
  };

  export class MiscYoutubeUpdateChannelPlaylistError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1MiscYoutubePlaylist400Error1", ApiV1MiscYoutubePlaylist400Error1>
      | Declared<"apiV1MiscYoutubePlaylist401Error1", ApiV1MiscYoutubePlaylist401Error1>
      | Declared<"apiV1MiscYoutubePlaylist403Error1", ApiV1MiscYoutubePlaylist403Error1>
      | Declared<"apiV1MiscYoutubePlaylist404Error1", ApiV1MiscYoutubePlaylist404Error1>
      | Declared<"apiV1MiscYoutubePlaylist429Error1", ApiV1MiscYoutubePlaylist429Error1>
      | Declared<"apiV1MiscYoutubePlaylist500Error1", ApiV1MiscYoutubePlaylist500Error1>
      | Declared<"apiV1MiscYoutubePlaylist502Error1", ApiV1MiscYoutubePlaylist502Error1>
      | Declared<"apiV1MiscYoutubePlaylist503Error1", ApiV1MiscYoutubePlaylist503Error1>
      | Declared<"apiV1MiscYoutubePlaylist504Error1", ApiV1MiscYoutubePlaylist504Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<MiscYoutubeUpdateChannelPlaylistError> = [
      {
        on: 400,
        kind: "apiV1MiscYoutubePlaylist400Error1",
        decode: { kind: "json", schema: apiV1MiscYoutubePlaylist400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1MiscYoutubePlaylist401Error1",
        decode: { kind: "json", schema: apiV1MiscYoutubePlaylist401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1MiscYoutubePlaylist403Error1",
        decode: { kind: "json", schema: apiV1MiscYoutubePlaylist403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1MiscYoutubePlaylist404Error1",
        decode: { kind: "json", schema: apiV1MiscYoutubePlaylist404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1MiscYoutubePlaylist429Error1",
        decode: { kind: "json", schema: apiV1MiscYoutubePlaylist429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1MiscYoutubePlaylist500Error1",
        decode: { kind: "json", schema: apiV1MiscYoutubePlaylist500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1MiscYoutubePlaylist502Error1",
        decode: { kind: "json", schema: apiV1MiscYoutubePlaylist502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1MiscYoutubePlaylist503Error1",
        decode: { kind: "json", schema: apiV1MiscYoutubePlaylist503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1MiscYoutubePlaylist504Error1",
        decode: { kind: "json", schema: apiV1MiscYoutubePlaylist504Error1Schema },
      },
    ];
  }
}
