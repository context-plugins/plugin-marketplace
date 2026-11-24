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
  apiV1SocialAccountByTypeResponseSchema,
  type ApiV1SocialAccountByTypeResponse,
} from "../models/api-v1-social-account-by-type-response.js";
import {
  apiV1SocialAccountByType400Error1Schema,
  type ApiV1SocialAccountByType400Error1,
} from "../models/api-v1-social-account-by-type400-error1.js";
import {
  apiV1SocialAccountByType401Error1Schema,
  type ApiV1SocialAccountByType401Error1,
} from "../models/api-v1-social-account-by-type401-error1.js";
import {
  apiV1SocialAccountByType403Error1Schema,
  type ApiV1SocialAccountByType403Error1,
} from "../models/api-v1-social-account-by-type403-error1.js";
import {
  apiV1SocialAccountByType404Error1Schema,
  type ApiV1SocialAccountByType404Error1,
} from "../models/api-v1-social-account-by-type404-error1.js";
import {
  apiV1SocialAccountByType429Error1Schema,
  type ApiV1SocialAccountByType429Error1,
} from "../models/api-v1-social-account-by-type429-error1.js";
import {
  apiV1SocialAccountByType500Error1Schema,
  type ApiV1SocialAccountByType500Error1,
} from "../models/api-v1-social-account-by-type500-error1.js";
import {
  apiV1SocialAccountByType502Error1Schema,
  type ApiV1SocialAccountByType502Error1,
} from "../models/api-v1-social-account-by-type502-error1.js";
import {
  apiV1SocialAccountByType503Error1Schema,
  type ApiV1SocialAccountByType503Error1,
} from "../models/api-v1-social-account-by-type503-error1.js";
import {
  apiV1SocialAccountByType504Error1Schema,
  type ApiV1SocialAccountByType504Error1,
} from "../models/api-v1-social-account-by-type504-error1.js";
import {
  apiV1SocialAccountConnectRequestInternalSchema,
  type ApiV1SocialAccountConnectRequest,
} from "../models/api-v1-social-account-connect-request.js";
import {
  apiV1SocialAccountConnectResponseSchema,
  type ApiV1SocialAccountConnectResponse,
} from "../models/api-v1-social-account-connect-response.js";
import {
  apiV1SocialAccountConnect400Error1Schema,
  type ApiV1SocialAccountConnect400Error1,
} from "../models/api-v1-social-account-connect400-error1.js";
import {
  apiV1SocialAccountConnect401Error1Schema,
  type ApiV1SocialAccountConnect401Error1,
} from "../models/api-v1-social-account-connect401-error1.js";
import {
  apiV1SocialAccountConnect403Error1Schema,
  type ApiV1SocialAccountConnect403Error1,
} from "../models/api-v1-social-account-connect403-error1.js";
import {
  apiV1SocialAccountConnect404Error1Schema,
  type ApiV1SocialAccountConnect404Error1,
} from "../models/api-v1-social-account-connect404-error1.js";
import {
  apiV1SocialAccountConnect429Error1Schema,
  type ApiV1SocialAccountConnect429Error1,
} from "../models/api-v1-social-account-connect429-error1.js";
import {
  apiV1SocialAccountConnect500Error1Schema,
  type ApiV1SocialAccountConnect500Error1,
} from "../models/api-v1-social-account-connect500-error1.js";
import {
  apiV1SocialAccountConnect502Error1Schema,
  type ApiV1SocialAccountConnect502Error1,
} from "../models/api-v1-social-account-connect502-error1.js";
import {
  apiV1SocialAccountConnect503Error1Schema,
  type ApiV1SocialAccountConnect503Error1,
} from "../models/api-v1-social-account-connect503-error1.js";
import {
  apiV1SocialAccountConnect504Error1Schema,
  type ApiV1SocialAccountConnect504Error1,
} from "../models/api-v1-social-account-connect504-error1.js";
import {
  apiV1SocialAccountConnectionCheckRequestSchema,
  type ApiV1SocialAccountConnectionCheckRequest,
} from "../models/api-v1-social-account-connection-check-request.js";
import {
  apiV1SocialAccountConnectionCheckResponseInternalSchema,
  type ApiV1SocialAccountConnectionCheckResponse,
} from "../models/api-v1-social-account-connection-check-response.js";
import {
  apiV1SocialAccountConnectionCheck400Error1Schema,
  type ApiV1SocialAccountConnectionCheck400Error1,
} from "../models/api-v1-social-account-connection-check400-error1.js";
import {
  apiV1SocialAccountConnectionCheck401Error1Schema,
  type ApiV1SocialAccountConnectionCheck401Error1,
} from "../models/api-v1-social-account-connection-check401-error1.js";
import {
  apiV1SocialAccountConnectionCheck403Error1Schema,
  type ApiV1SocialAccountConnectionCheck403Error1,
} from "../models/api-v1-social-account-connection-check403-error1.js";
import {
  apiV1SocialAccountConnectionCheck404Error1Schema,
  type ApiV1SocialAccountConnectionCheck404Error1,
} from "../models/api-v1-social-account-connection-check404-error1.js";
import {
  apiV1SocialAccountConnectionCheck429Error1Schema,
  type ApiV1SocialAccountConnectionCheck429Error1,
} from "../models/api-v1-social-account-connection-check429-error1.js";
import {
  apiV1SocialAccountConnectionCheck500Error1Schema,
  type ApiV1SocialAccountConnectionCheck500Error1,
} from "../models/api-v1-social-account-connection-check500-error1.js";
import {
  apiV1SocialAccountConnectionCheck502Error1Schema,
  type ApiV1SocialAccountConnectionCheck502Error1,
} from "../models/api-v1-social-account-connection-check502-error1.js";
import {
  apiV1SocialAccountConnectionCheck503Error1Schema,
  type ApiV1SocialAccountConnectionCheck503Error1,
} from "../models/api-v1-social-account-connection-check503-error1.js";
import {
  apiV1SocialAccountConnectionCheck504Error1Schema,
  type ApiV1SocialAccountConnectionCheck504Error1,
} from "../models/api-v1-social-account-connection-check504-error1.js";
import {
  apiV1SocialAccountCopyRequestInternalSchema,
  type ApiV1SocialAccountCopyRequest,
} from "../models/api-v1-social-account-copy-request.js";
import {
  apiV1SocialAccountCopyResponseSchema,
  type ApiV1SocialAccountCopyResponse,
} from "../models/api-v1-social-account-copy-response.js";
import {
  apiV1SocialAccountCopy400Error1Schema,
  type ApiV1SocialAccountCopy400Error1,
} from "../models/api-v1-social-account-copy400-error1.js";
import {
  apiV1SocialAccountCopy401Error1Schema,
  type ApiV1SocialAccountCopy401Error1,
} from "../models/api-v1-social-account-copy401-error1.js";
import {
  apiV1SocialAccountCopy403Error1Schema,
  type ApiV1SocialAccountCopy403Error1,
} from "../models/api-v1-social-account-copy403-error1.js";
import {
  apiV1SocialAccountCopy404Error1Schema,
  type ApiV1SocialAccountCopy404Error1,
} from "../models/api-v1-social-account-copy404-error1.js";
import {
  apiV1SocialAccountCopy429Error1Schema,
  type ApiV1SocialAccountCopy429Error1,
} from "../models/api-v1-social-account-copy429-error1.js";
import {
  apiV1SocialAccountCopy500Error1Schema,
  type ApiV1SocialAccountCopy500Error1,
} from "../models/api-v1-social-account-copy500-error1.js";
import {
  apiV1SocialAccountCopy502Error1Schema,
  type ApiV1SocialAccountCopy502Error1,
} from "../models/api-v1-social-account-copy502-error1.js";
import {
  apiV1SocialAccountCopy503Error1Schema,
  type ApiV1SocialAccountCopy503Error1,
} from "../models/api-v1-social-account-copy503-error1.js";
import {
  apiV1SocialAccountCopy504Error1Schema,
  type ApiV1SocialAccountCopy504Error1,
} from "../models/api-v1-social-account-copy504-error1.js";
import {
  apiV1SocialAccountCreatePortalLinkRequestInternalSchema,
  type ApiV1SocialAccountCreatePortalLinkRequest,
} from "../models/api-v1-social-account-create-portal-link-request.js";
import {
  apiV1SocialAccountCreatePortalLinkResponseSchema,
  type ApiV1SocialAccountCreatePortalLinkResponse,
} from "../models/api-v1-social-account-create-portal-link-response.js";
import {
  apiV1SocialAccountCreatePortalLink400Error1Schema,
  type ApiV1SocialAccountCreatePortalLink400Error1,
} from "../models/api-v1-social-account-create-portal-link400-error1.js";
import {
  apiV1SocialAccountCreatePortalLink401Error1Schema,
  type ApiV1SocialAccountCreatePortalLink401Error1,
} from "../models/api-v1-social-account-create-portal-link401-error1.js";
import {
  apiV1SocialAccountCreatePortalLink403Error1Schema,
  type ApiV1SocialAccountCreatePortalLink403Error1,
} from "../models/api-v1-social-account-create-portal-link403-error1.js";
import {
  apiV1SocialAccountCreatePortalLink404Error1Schema,
  type ApiV1SocialAccountCreatePortalLink404Error1,
} from "../models/api-v1-social-account-create-portal-link404-error1.js";
import {
  apiV1SocialAccountCreatePortalLink429Error1Schema,
  type ApiV1SocialAccountCreatePortalLink429Error1,
} from "../models/api-v1-social-account-create-portal-link429-error1.js";
import {
  apiV1SocialAccountCreatePortalLink500Error1Schema,
  type ApiV1SocialAccountCreatePortalLink500Error1,
} from "../models/api-v1-social-account-create-portal-link500-error1.js";
import {
  apiV1SocialAccountCreatePortalLink502Error1Schema,
  type ApiV1SocialAccountCreatePortalLink502Error1,
} from "../models/api-v1-social-account-create-portal-link502-error1.js";
import {
  apiV1SocialAccountCreatePortalLink503Error1Schema,
  type ApiV1SocialAccountCreatePortalLink503Error1,
} from "../models/api-v1-social-account-create-portal-link503-error1.js";
import {
  apiV1SocialAccountCreatePortalLink504Error1Schema,
  type ApiV1SocialAccountCreatePortalLink504Error1,
} from "../models/api-v1-social-account-create-portal-link504-error1.js";
import {
  apiV1SocialAccountDisconnectRequestSchema,
  type ApiV1SocialAccountDisconnectRequest,
} from "../models/api-v1-social-account-disconnect-request.js";
import {
  apiV1SocialAccountDisconnectResponseSchema,
  type ApiV1SocialAccountDisconnectResponse,
} from "../models/api-v1-social-account-disconnect-response.js";
import {
  apiV1SocialAccountDisconnect400Error1Schema,
  type ApiV1SocialAccountDisconnect400Error1,
} from "../models/api-v1-social-account-disconnect400-error1.js";
import {
  apiV1SocialAccountDisconnect401Error1Schema,
  type ApiV1SocialAccountDisconnect401Error1,
} from "../models/api-v1-social-account-disconnect401-error1.js";
import {
  apiV1SocialAccountDisconnect403Error1Schema,
  type ApiV1SocialAccountDisconnect403Error1,
} from "../models/api-v1-social-account-disconnect403-error1.js";
import {
  apiV1SocialAccountDisconnect404Error1Schema,
  type ApiV1SocialAccountDisconnect404Error1,
} from "../models/api-v1-social-account-disconnect404-error1.js";
import {
  apiV1SocialAccountDisconnect429Error1Schema,
  type ApiV1SocialAccountDisconnect429Error1,
} from "../models/api-v1-social-account-disconnect429-error1.js";
import {
  apiV1SocialAccountDisconnect500Error1Schema,
  type ApiV1SocialAccountDisconnect500Error1,
} from "../models/api-v1-social-account-disconnect500-error1.js";
import {
  apiV1SocialAccountDisconnect502Error1Schema,
  type ApiV1SocialAccountDisconnect502Error1,
} from "../models/api-v1-social-account-disconnect502-error1.js";
import {
  apiV1SocialAccountDisconnect503Error1Schema,
  type ApiV1SocialAccountDisconnect503Error1,
} from "../models/api-v1-social-account-disconnect503-error1.js";
import {
  apiV1SocialAccountDisconnect504Error1Schema,
  type ApiV1SocialAccountDisconnect504Error1,
} from "../models/api-v1-social-account-disconnect504-error1.js";
import {
  apiV1SocialAccountMessagingDisableRequestSchema,
  type ApiV1SocialAccountMessagingDisableRequest,
} from "../models/api-v1-social-account-messaging-disable-request.js";
import {
  apiV1SocialAccountMessagingDisableResponseSchema,
  type ApiV1SocialAccountMessagingDisableResponse,
} from "../models/api-v1-social-account-messaging-disable-response.js";
import {
  apiV1SocialAccountMessagingDisable400Error1Schema,
  type ApiV1SocialAccountMessagingDisable400Error1,
} from "../models/api-v1-social-account-messaging-disable400-error1.js";
import {
  apiV1SocialAccountMessagingDisable401Error1Schema,
  type ApiV1SocialAccountMessagingDisable401Error1,
} from "../models/api-v1-social-account-messaging-disable401-error1.js";
import {
  apiV1SocialAccountMessagingDisable403Error1Schema,
  type ApiV1SocialAccountMessagingDisable403Error1,
} from "../models/api-v1-social-account-messaging-disable403-error1.js";
import {
  apiV1SocialAccountMessagingDisable404Error1Schema,
  type ApiV1SocialAccountMessagingDisable404Error1,
} from "../models/api-v1-social-account-messaging-disable404-error1.js";
import {
  apiV1SocialAccountMessagingDisable429Error1Schema,
  type ApiV1SocialAccountMessagingDisable429Error1,
} from "../models/api-v1-social-account-messaging-disable429-error1.js";
import {
  apiV1SocialAccountMessagingDisable500Error1Schema,
  type ApiV1SocialAccountMessagingDisable500Error1,
} from "../models/api-v1-social-account-messaging-disable500-error1.js";
import {
  apiV1SocialAccountMessagingDisable502Error1Schema,
  type ApiV1SocialAccountMessagingDisable502Error1,
} from "../models/api-v1-social-account-messaging-disable502-error1.js";
import {
  apiV1SocialAccountMessagingDisable503Error1Schema,
  type ApiV1SocialAccountMessagingDisable503Error1,
} from "../models/api-v1-social-account-messaging-disable503-error1.js";
import {
  apiV1SocialAccountMessagingDisable504Error1Schema,
  type ApiV1SocialAccountMessagingDisable504Error1,
} from "../models/api-v1-social-account-messaging-disable504-error1.js";
import {
  apiV1SocialAccountMessagingEnableRequestSchema,
  type ApiV1SocialAccountMessagingEnableRequest,
} from "../models/api-v1-social-account-messaging-enable-request.js";
import {
  apiV1SocialAccountMessagingEnableResponseSchema,
  type ApiV1SocialAccountMessagingEnableResponse,
} from "../models/api-v1-social-account-messaging-enable-response.js";
import {
  apiV1SocialAccountMessagingEnable400Error1Schema,
  type ApiV1SocialAccountMessagingEnable400Error1,
} from "../models/api-v1-social-account-messaging-enable400-error1.js";
import {
  apiV1SocialAccountMessagingEnable401Error1Schema,
  type ApiV1SocialAccountMessagingEnable401Error1,
} from "../models/api-v1-social-account-messaging-enable401-error1.js";
import {
  apiV1SocialAccountMessagingEnable403Error1Schema,
  type ApiV1SocialAccountMessagingEnable403Error1,
} from "../models/api-v1-social-account-messaging-enable403-error1.js";
import {
  apiV1SocialAccountMessagingEnable404Error1Schema,
  type ApiV1SocialAccountMessagingEnable404Error1,
} from "../models/api-v1-social-account-messaging-enable404-error1.js";
import {
  apiV1SocialAccountMessagingEnable429Error1Schema,
  type ApiV1SocialAccountMessagingEnable429Error1,
} from "../models/api-v1-social-account-messaging-enable429-error1.js";
import {
  apiV1SocialAccountMessagingEnable500Error1Schema,
  type ApiV1SocialAccountMessagingEnable500Error1,
} from "../models/api-v1-social-account-messaging-enable500-error1.js";
import {
  apiV1SocialAccountMessagingEnable502Error1Schema,
  type ApiV1SocialAccountMessagingEnable502Error1,
} from "../models/api-v1-social-account-messaging-enable502-error1.js";
import {
  apiV1SocialAccountMessagingEnable503Error1Schema,
  type ApiV1SocialAccountMessagingEnable503Error1,
} from "../models/api-v1-social-account-messaging-enable503-error1.js";
import {
  apiV1SocialAccountMessagingEnable504Error1Schema,
  type ApiV1SocialAccountMessagingEnable504Error1,
} from "../models/api-v1-social-account-messaging-enable504-error1.js";
import {
  apiV1SocialAccountProfileRefreshRequestSchema,
  type ApiV1SocialAccountProfileRefreshRequest,
} from "../models/api-v1-social-account-profile-refresh-request.js";
import {
  apiV1SocialAccountProfileRefreshResponseInternalSchema,
  type ApiV1SocialAccountProfileRefreshResponse,
} from "../models/api-v1-social-account-profile-refresh-response.js";
import {
  apiV1SocialAccountProfileRefresh400Error1Schema,
  type ApiV1SocialAccountProfileRefresh400Error1,
} from "../models/api-v1-social-account-profile-refresh400-error1.js";
import {
  apiV1SocialAccountProfileRefresh401Error1Schema,
  type ApiV1SocialAccountProfileRefresh401Error1,
} from "../models/api-v1-social-account-profile-refresh401-error1.js";
import {
  apiV1SocialAccountProfileRefresh403Error1Schema,
  type ApiV1SocialAccountProfileRefresh403Error1,
} from "../models/api-v1-social-account-profile-refresh403-error1.js";
import {
  apiV1SocialAccountProfileRefresh404Error1Schema,
  type ApiV1SocialAccountProfileRefresh404Error1,
} from "../models/api-v1-social-account-profile-refresh404-error1.js";
import {
  apiV1SocialAccountProfileRefresh429Error1Schema,
  type ApiV1SocialAccountProfileRefresh429Error1,
} from "../models/api-v1-social-account-profile-refresh429-error1.js";
import {
  apiV1SocialAccountProfileRefresh500Error1Schema,
  type ApiV1SocialAccountProfileRefresh500Error1,
} from "../models/api-v1-social-account-profile-refresh500-error1.js";
import {
  apiV1SocialAccountProfileRefresh502Error1Schema,
  type ApiV1SocialAccountProfileRefresh502Error1,
} from "../models/api-v1-social-account-profile-refresh502-error1.js";
import {
  apiV1SocialAccountProfileRefresh503Error1Schema,
  type ApiV1SocialAccountProfileRefresh503Error1,
} from "../models/api-v1-social-account-profile-refresh503-error1.js";
import {
  apiV1SocialAccountProfileRefresh504Error1Schema,
  type ApiV1SocialAccountProfileRefresh504Error1,
} from "../models/api-v1-social-account-profile-refresh504-error1.js";
import {
  apiV1SocialAccountRefreshChannelsRequestSchema,
  type ApiV1SocialAccountRefreshChannelsRequest,
} from "../models/api-v1-social-account-refresh-channels-request.js";
import {
  apiV1SocialAccountRefreshChannelsResponseSchema,
  type ApiV1SocialAccountRefreshChannelsResponse,
} from "../models/api-v1-social-account-refresh-channels-response.js";
import {
  apiV1SocialAccountRefreshChannels400Error1Schema,
  type ApiV1SocialAccountRefreshChannels400Error1,
} from "../models/api-v1-social-account-refresh-channels400-error1.js";
import {
  apiV1SocialAccountRefreshChannels401Error1Schema,
  type ApiV1SocialAccountRefreshChannels401Error1,
} from "../models/api-v1-social-account-refresh-channels401-error1.js";
import {
  apiV1SocialAccountRefreshChannels403Error1Schema,
  type ApiV1SocialAccountRefreshChannels403Error1,
} from "../models/api-v1-social-account-refresh-channels403-error1.js";
import {
  apiV1SocialAccountRefreshChannels404Error1Schema,
  type ApiV1SocialAccountRefreshChannels404Error1,
} from "../models/api-v1-social-account-refresh-channels404-error1.js";
import {
  apiV1SocialAccountRefreshChannels429Error1Schema,
  type ApiV1SocialAccountRefreshChannels429Error1,
} from "../models/api-v1-social-account-refresh-channels429-error1.js";
import {
  apiV1SocialAccountRefreshChannels500Error1Schema,
  type ApiV1SocialAccountRefreshChannels500Error1,
} from "../models/api-v1-social-account-refresh-channels500-error1.js";
import {
  apiV1SocialAccountRefreshChannels502Error1Schema,
  type ApiV1SocialAccountRefreshChannels502Error1,
} from "../models/api-v1-social-account-refresh-channels502-error1.js";
import {
  apiV1SocialAccountRefreshChannels503Error1Schema,
  type ApiV1SocialAccountRefreshChannels503Error1,
} from "../models/api-v1-social-account-refresh-channels503-error1.js";
import {
  apiV1SocialAccountRefreshChannels504Error1Schema,
  type ApiV1SocialAccountRefreshChannels504Error1,
} from "../models/api-v1-social-account-refresh-channels504-error1.js";
import {
  apiV1SocialAccountSetChannelRequestSchema,
  type ApiV1SocialAccountSetChannelRequest,
} from "../models/api-v1-social-account-set-channel-request.js";
import {
  apiV1SocialAccountSetChannelResponseSchema,
  type ApiV1SocialAccountSetChannelResponse,
} from "../models/api-v1-social-account-set-channel-response.js";
import {
  apiV1SocialAccountSetChannel400Error1Schema,
  type ApiV1SocialAccountSetChannel400Error1,
} from "../models/api-v1-social-account-set-channel400-error1.js";
import {
  apiV1SocialAccountSetChannel401Error1Schema,
  type ApiV1SocialAccountSetChannel401Error1,
} from "../models/api-v1-social-account-set-channel401-error1.js";
import {
  apiV1SocialAccountSetChannel403Error1Schema,
  type ApiV1SocialAccountSetChannel403Error1,
} from "../models/api-v1-social-account-set-channel403-error1.js";
import {
  apiV1SocialAccountSetChannel404Error1Schema,
  type ApiV1SocialAccountSetChannel404Error1,
} from "../models/api-v1-social-account-set-channel404-error1.js";
import {
  apiV1SocialAccountSetChannel429Error1Schema,
  type ApiV1SocialAccountSetChannel429Error1,
} from "../models/api-v1-social-account-set-channel429-error1.js";
import {
  apiV1SocialAccountSetChannel500Error1Schema,
  type ApiV1SocialAccountSetChannel500Error1,
} from "../models/api-v1-social-account-set-channel500-error1.js";
import {
  apiV1SocialAccountSetChannel502Error1Schema,
  type ApiV1SocialAccountSetChannel502Error1,
} from "../models/api-v1-social-account-set-channel502-error1.js";
import {
  apiV1SocialAccountSetChannel503Error1Schema,
  type ApiV1SocialAccountSetChannel503Error1,
} from "../models/api-v1-social-account-set-channel503-error1.js";
import {
  apiV1SocialAccountSetChannel504Error1Schema,
  type ApiV1SocialAccountSetChannel504Error1,
} from "../models/api-v1-social-account-set-channel504-error1.js";
import {
  apiV1SocialAccountToDeleteResponseSchema,
  type ApiV1SocialAccountToDeleteResponse,
} from "../models/api-v1-social-account-to-delete-response.js";
import {
  apiV1SocialAccountToDelete400Error1Schema,
  type ApiV1SocialAccountToDelete400Error1,
} from "../models/api-v1-social-account-to-delete400-error1.js";
import {
  apiV1SocialAccountToDelete401Error1Schema,
  type ApiV1SocialAccountToDelete401Error1,
} from "../models/api-v1-social-account-to-delete401-error1.js";
import {
  apiV1SocialAccountToDelete403Error1Schema,
  type ApiV1SocialAccountToDelete403Error1,
} from "../models/api-v1-social-account-to-delete403-error1.js";
import {
  apiV1SocialAccountToDelete404Error1Schema,
  type ApiV1SocialAccountToDelete404Error1,
} from "../models/api-v1-social-account-to-delete404-error1.js";
import {
  apiV1SocialAccountToDelete429Error1Schema,
  type ApiV1SocialAccountToDelete429Error1,
} from "../models/api-v1-social-account-to-delete429-error1.js";
import {
  apiV1SocialAccountToDelete500Error1Schema,
  type ApiV1SocialAccountToDelete500Error1,
} from "../models/api-v1-social-account-to-delete500-error1.js";
import {
  apiV1SocialAccountToDelete502Error1Schema,
  type ApiV1SocialAccountToDelete502Error1,
} from "../models/api-v1-social-account-to-delete502-error1.js";
import {
  apiV1SocialAccountToDelete503Error1Schema,
  type ApiV1SocialAccountToDelete503Error1,
} from "../models/api-v1-social-account-to-delete503-error1.js";
import {
  apiV1SocialAccountToDelete504Error1Schema,
  type ApiV1SocialAccountToDelete504Error1,
} from "../models/api-v1-social-account-to-delete504-error1.js";
import {
  apiV1SocialAccountUnsetChannelRequestSchema,
  type ApiV1SocialAccountUnsetChannelRequest,
} from "../models/api-v1-social-account-unset-channel-request.js";
import {
  apiV1SocialAccountUnsetChannelResponseSchema,
  type ApiV1SocialAccountUnsetChannelResponse,
} from "../models/api-v1-social-account-unset-channel-response.js";
import {
  apiV1SocialAccountUnsetChannel400Error1Schema,
  type ApiV1SocialAccountUnsetChannel400Error1,
} from "../models/api-v1-social-account-unset-channel400-error1.js";
import {
  apiV1SocialAccountUnsetChannel401Error1Schema,
  type ApiV1SocialAccountUnsetChannel401Error1,
} from "../models/api-v1-social-account-unset-channel401-error1.js";
import {
  apiV1SocialAccountUnsetChannel403Error1Schema,
  type ApiV1SocialAccountUnsetChannel403Error1,
} from "../models/api-v1-social-account-unset-channel403-error1.js";
import {
  apiV1SocialAccountUnsetChannel404Error1Schema,
  type ApiV1SocialAccountUnsetChannel404Error1,
} from "../models/api-v1-social-account-unset-channel404-error1.js";
import {
  apiV1SocialAccountUnsetChannel429Error1Schema,
  type ApiV1SocialAccountUnsetChannel429Error1,
} from "../models/api-v1-social-account-unset-channel429-error1.js";
import {
  apiV1SocialAccountUnsetChannel500Error1Schema,
  type ApiV1SocialAccountUnsetChannel500Error1,
} from "../models/api-v1-social-account-unset-channel500-error1.js";
import {
  apiV1SocialAccountUnsetChannel502Error1Schema,
  type ApiV1SocialAccountUnsetChannel502Error1,
} from "../models/api-v1-social-account-unset-channel502-error1.js";
import {
  apiV1SocialAccountUnsetChannel503Error1Schema,
  type ApiV1SocialAccountUnsetChannel503Error1,
} from "../models/api-v1-social-account-unset-channel503-error1.js";
import {
  apiV1SocialAccountUnsetChannel504Error1Schema,
  type ApiV1SocialAccountUnsetChannel504Error1,
} from "../models/api-v1-social-account-unset-channel504-error1.js";
import { typeSchema, type Type } from "../models/type.js";
import type { Servers } from "../servers.js";

export class SocialAccountApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Connect social account for team
   *
   * @remarks
   * Generate OAuth URL for social account connection. Redirect user to this URL to connect social
   * account. For Mastodon and Bluesky an unusable `serverUrl` returns 400 with the reason, while a
   * reachable-but-failing instance returns 502.
   *
   * @returns 200
   *
   * @throws {@link SocialAccountApi.SocialAccountConnectError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  socialAccountConnect(
    request: SocialAccountApi.SocialAccountConnectRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV1SocialAccountConnectResponse, SocialAccountApi.SocialAccountConnectError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/social-account/connect"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1SocialAccountConnectRequestInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: apiV1SocialAccountConnectResponseSchema },
        errorFactory: SocialAccountApi.SocialAccountConnectError,
      },
      options,
    );
  }

  /**
   * Manually run connection/disconnect check
   *
   * @remarks
   * Force an immediate check of whether a social account's authorization is still valid, instead of
   * waiting for the scheduled check. Use it to surface expired tokens before a scheduled post
   * fails.
   *
   * @returns 200
   *
   * @throws {@link SocialAccountApi.SocialAccountConnectionCheckError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  socialAccountConnectionCheck(
    request: SocialAccountApi.SocialAccountConnectionCheckRequest = {},
    options?: RequestOptions,
  ): ApiPromise<
    ApiV1SocialAccountConnectionCheckResponse,
    SocialAccountApi.SocialAccountConnectionCheckError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/social-account/connection-check"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1SocialAccountConnectionCheckRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: apiV1SocialAccountConnectionCheckResponseInternalSchema },
        errorFactory: SocialAccountApi.SocialAccountConnectionCheckError,
      },
      options,
    );
  }

  /**
   * Copy social accounts
   *
   * @remarks
   * Copy connected social accounts from one team to another so you can reuse an existing
   * authorization without sending the user through OAuth again.
   *
   * @returns 200
   *
   * @throws {@link SocialAccountApi.SocialAccountCopyError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  socialAccountCopy(
    request: SocialAccountApi.SocialAccountCopyRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV1SocialAccountCopyResponse[], SocialAccountApi.SocialAccountCopyError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/social-account/copy"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1SocialAccountCopyRequestInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => apiV1SocialAccountCopyResponseSchema)) },
        errorFactory: SocialAccountApi.SocialAccountCopyError,
      },
      options,
    );
  }

  /**
   * Create portal link
   *
   * @remarks
   * Simplify connect flow. Create a portal link which can be used to manage connected social
   * accounts directly on bundle.social platform without implementing the logic on your side.
   *
   * @returns 200
   *
   * @throws {@link SocialAccountApi.SocialAccountCreatePortalLinkError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  socialAccountCreatePortalLink(
    request: SocialAccountApi.SocialAccountCreatePortalLinkRequest = {},
    options?: RequestOptions,
  ): ApiPromise<
    ApiV1SocialAccountCreatePortalLinkResponse,
    SocialAccountApi.SocialAccountCreatePortalLinkError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/social-account/create-portal-link"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1SocialAccountCreatePortalLinkRequestInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: apiV1SocialAccountCreatePortalLinkResponseSchema },
        errorFactory: SocialAccountApi.SocialAccountCreatePortalLinkError,
      },
      options,
    );
  }

  /**
   * Disable DM messaging for a social account
   *
   * @remarks
   * Stop processing DMs for the account and narrow its Meta webhook subscription to what other
   * features still need. Idempotent. Processing stops immediately; if Meta does not confirm the
   * change the status is DISABLE_PENDING and the call returns 502, so it can be retried.
   *
   * @returns 200
   *
   * @throws {@link SocialAccountApi.SocialAccountDisableMessagingError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  socialAccountDisableMessaging(
    request: SocialAccountApi.SocialAccountDisableMessagingRequest = {},
    options?: RequestOptions,
  ): ApiPromise<
    ApiV1SocialAccountMessagingDisableResponse,
    SocialAccountApi.SocialAccountDisableMessagingError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/social-account/messaging/disable"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1SocialAccountMessagingDisableRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: apiV1SocialAccountMessagingDisableResponseSchema },
        errorFactory: SocialAccountApi.SocialAccountDisableMessagingError,
      },
      options,
    );
  }

  /**
   * Disconnect social account from team
   *
   * @remarks
   * This will remove the social account from all the scheduled posts too.
   *
   * @returns 200
   *
   * @throws {@link SocialAccountApi.SocialAccountDisconnectError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  socialAccountDisconnect(
    request: SocialAccountApi.SocialAccountDisconnectRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV1SocialAccountDisconnectResponse, SocialAccountApi.SocialAccountDisconnectError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v1/social-account/disconnect"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1SocialAccountDisconnectRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: apiV1SocialAccountDisconnectResponseSchema },
        errorFactory: SocialAccountApi.SocialAccountDisconnectError,
      },
      options,
    );
  }

  /**
   * Enable DM messaging for a social account
   *
   * @remarks
   * Subscribe the team's Facebook page or Instagram account to Meta DM webhooks and start
   * processing its messages. Connecting or re-authorizing an account never does this on its own.
   * Idempotent. Returns 403 when the organization has not been granted Instagram and Facebook
   * direct messages and automations (email contact@bundle.social to request it), 400 when the
   * account lacks the messaging permissions (reconnect it), and 502 when Meta rejects the
   * subscription; the account then stays DISABLED.
   *
   * @returns 200
   *
   * @throws {@link SocialAccountApi.SocialAccountEnableMessagingError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  socialAccountEnableMessaging(
    request: SocialAccountApi.SocialAccountEnableMessagingRequest = {},
    options?: RequestOptions,
  ): ApiPromise<
    ApiV1SocialAccountMessagingEnableResponse,
    SocialAccountApi.SocialAccountEnableMessagingError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/social-account/messaging/enable"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1SocialAccountMessagingEnableRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: apiV1SocialAccountMessagingEnableResponseSchema },
        errorFactory: SocialAccountApi.SocialAccountEnableMessagingError,
      },
      options,
    );
  }

  /**
   * Get paginated social accounts scheduled to delete
   *
   * @remarks
   * List social accounts queued for deletion, with pagination. Use it to warn users before an
   * account and its data are permanently removed.
   *
   * @returns 200
   *
   * @throws {@link SocialAccountApi.SocialAccountGetAccountsToDeleteError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  socialAccountGetAccountsToDelete(
    request: SocialAccountApi.SocialAccountGetAccountsToDeleteRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV1SocialAccountToDeleteResponse, SocialAccountApi.SocialAccountGetAccountsToDeleteError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/social-account/to-delete"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "page", value: request.page, schema: s.defaulted(s.float64(), 1) },
          { name: "pageSize", value: request.pageSize, schema: s.defaulted(s.float64(), 20) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1SocialAccountToDeleteResponseSchema },
        errorFactory: SocialAccountApi.SocialAccountGetAccountsToDeleteError,
      },
      options,
    );
  }

  /**
   * Get social account by team and type
   *
   * @remarks
   * Look up a team's connected account for a specific platform without listing every account first.
   * Useful when you already know which platform you want to publish to.
   *
   * @returns 200
   *
   * @throws {@link SocialAccountApi.SocialAccountGetByTypeError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  socialAccountGetByType(
    request: SocialAccountApi.SocialAccountGetByTypeRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1SocialAccountByTypeResponse, SocialAccountApi.SocialAccountGetByTypeError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/social-account/by-type"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "type", value: request.type, schema: typeSchema },
          { name: "teamId", value: request.teamId, schema: s.string() },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1SocialAccountByTypeResponseSchema },
        errorFactory: SocialAccountApi.SocialAccountGetByTypeError,
      },
      options,
    );
  }

  /**
   * Manually refresh social account profile info
   *
   * @remarks
   * Pull the latest profile name, handle, and avatar from the platform for a connected account. Use
   * it to keep your own UI in sync after a user renames their profile.
   *
   * @returns 200
   *
   * @throws {@link SocialAccountApi.SocialAccountProfileRefreshError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  socialAccountProfileRefresh(
    request: SocialAccountApi.SocialAccountProfileRefreshRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV1SocialAccountProfileRefreshResponse, SocialAccountApi.SocialAccountProfileRefreshError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/social-account/profile-refresh"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1SocialAccountProfileRefreshRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: apiV1SocialAccountProfileRefreshResponseInternalSchema },
        errorFactory: SocialAccountApi.SocialAccountProfileRefreshError,
      },
      options,
    );
  }

  /**
   * Refresh channels for social account
   *
   * @remarks
   * Refresh channels saved on socialAccount.channels. This is only needed for some social account
   * types - Reddit, Discord, Slack, Pinterest.
   *
   * @returns 200
   *
   * @throws {@link SocialAccountApi.SocialAccountRefreshChannelsError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  socialAccountRefreshChannels(
    request: SocialAccountApi.SocialAccountRefreshChannelsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<
    ApiV1SocialAccountRefreshChannelsResponse,
    SocialAccountApi.SocialAccountRefreshChannelsError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/social-account/refresh-channels"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1SocialAccountRefreshChannelsRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: apiV1SocialAccountRefreshChannelsResponseSchema },
        errorFactory: SocialAccountApi.SocialAccountRefreshChannelsError,
      },
      options,
    );
  }

  /**
   * Set channel for social account
   *
   * @remarks
   * Needed only for some social account types - Youtube, Instagram, Facebook and Linkedin.
   *
   * @returns 200
   *
   * @throws {@link SocialAccountApi.SocialAccountSetChannelError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  socialAccountSetChannel(
    request: SocialAccountApi.SocialAccountSetChannelRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV1SocialAccountSetChannelResponse, SocialAccountApi.SocialAccountSetChannelError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/social-account/set-channel"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1SocialAccountSetChannelRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: apiV1SocialAccountSetChannelResponseSchema },
        errorFactory: SocialAccountApi.SocialAccountSetChannelError,
      },
      options,
    );
  }

  /**
   * Unset channel for social account
   *
   * @remarks
   * Clear selected channel while keeping social account authorization.
   *
   * @returns 200
   *
   * @throws {@link SocialAccountApi.SocialAccountUnsetChannelError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  socialAccountUnsetChannel(
    request: SocialAccountApi.SocialAccountUnsetChannelRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV1SocialAccountUnsetChannelResponse, SocialAccountApi.SocialAccountUnsetChannelError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/social-account/unset-channel"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1SocialAccountUnsetChannelRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: apiV1SocialAccountUnsetChannelResponseSchema },
        errorFactory: SocialAccountApi.SocialAccountUnsetChannelError,
      },
      options,
    );
  }
}

export namespace SocialAccountApi {
  export type SocialAccountConnectRequest = {
    /** Body */
    body?: ApiV1SocialAccountConnectRequest;
  };

  export class SocialAccountConnectError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1SocialAccountConnect400Error1", ApiV1SocialAccountConnect400Error1>
      | Declared<"apiV1SocialAccountConnect401Error1", ApiV1SocialAccountConnect401Error1>
      | Declared<"apiV1SocialAccountConnect403Error1", ApiV1SocialAccountConnect403Error1>
      | Declared<"apiV1SocialAccountConnect404Error1", ApiV1SocialAccountConnect404Error1>
      | Declared<"apiV1SocialAccountConnect429Error1", ApiV1SocialAccountConnect429Error1>
      | Declared<"apiV1SocialAccountConnect500Error1", ApiV1SocialAccountConnect500Error1>
      | Declared<"apiV1SocialAccountConnect502Error1", ApiV1SocialAccountConnect502Error1>
      | Declared<"apiV1SocialAccountConnect503Error1", ApiV1SocialAccountConnect503Error1>
      | Declared<"apiV1SocialAccountConnect504Error1", ApiV1SocialAccountConnect504Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<SocialAccountConnectError> = [
      {
        on: 400,
        kind: "apiV1SocialAccountConnect400Error1",
        decode: { kind: "json", schema: apiV1SocialAccountConnect400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1SocialAccountConnect401Error1",
        decode: { kind: "json", schema: apiV1SocialAccountConnect401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1SocialAccountConnect403Error1",
        decode: { kind: "json", schema: apiV1SocialAccountConnect403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1SocialAccountConnect404Error1",
        decode: { kind: "json", schema: apiV1SocialAccountConnect404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1SocialAccountConnect429Error1",
        decode: { kind: "json", schema: apiV1SocialAccountConnect429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1SocialAccountConnect500Error1",
        decode: { kind: "json", schema: apiV1SocialAccountConnect500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1SocialAccountConnect502Error1",
        decode: { kind: "json", schema: apiV1SocialAccountConnect502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1SocialAccountConnect503Error1",
        decode: { kind: "json", schema: apiV1SocialAccountConnect503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1SocialAccountConnect504Error1",
        decode: { kind: "json", schema: apiV1SocialAccountConnect504Error1Schema },
      },
    ];
  }

  export type SocialAccountConnectionCheckRequest = {
    /** Body */
    body?: ApiV1SocialAccountConnectionCheckRequest;
  };

  export class SocialAccountConnectionCheckError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1SocialAccountConnectionCheck400Error1", ApiV1SocialAccountConnectionCheck400Error1>
      | Declared<"apiV1SocialAccountConnectionCheck401Error1", ApiV1SocialAccountConnectionCheck401Error1>
      | Declared<"apiV1SocialAccountConnectionCheck403Error1", ApiV1SocialAccountConnectionCheck403Error1>
      | Declared<"apiV1SocialAccountConnectionCheck404Error1", ApiV1SocialAccountConnectionCheck404Error1>
      | Declared<"apiV1SocialAccountConnectionCheck429Error1", ApiV1SocialAccountConnectionCheck429Error1>
      | Declared<"apiV1SocialAccountConnectionCheck500Error1", ApiV1SocialAccountConnectionCheck500Error1>
      | Declared<"apiV1SocialAccountConnectionCheck502Error1", ApiV1SocialAccountConnectionCheck502Error1>
      | Declared<"apiV1SocialAccountConnectionCheck503Error1", ApiV1SocialAccountConnectionCheck503Error1>
      | Declared<"apiV1SocialAccountConnectionCheck504Error1", ApiV1SocialAccountConnectionCheck504Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<SocialAccountConnectionCheckError> = [
      {
        on: 400,
        kind: "apiV1SocialAccountConnectionCheck400Error1",
        decode: { kind: "json", schema: apiV1SocialAccountConnectionCheck400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1SocialAccountConnectionCheck401Error1",
        decode: { kind: "json", schema: apiV1SocialAccountConnectionCheck401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1SocialAccountConnectionCheck403Error1",
        decode: { kind: "json", schema: apiV1SocialAccountConnectionCheck403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1SocialAccountConnectionCheck404Error1",
        decode: { kind: "json", schema: apiV1SocialAccountConnectionCheck404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1SocialAccountConnectionCheck429Error1",
        decode: { kind: "json", schema: apiV1SocialAccountConnectionCheck429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1SocialAccountConnectionCheck500Error1",
        decode: { kind: "json", schema: apiV1SocialAccountConnectionCheck500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1SocialAccountConnectionCheck502Error1",
        decode: { kind: "json", schema: apiV1SocialAccountConnectionCheck502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1SocialAccountConnectionCheck503Error1",
        decode: { kind: "json", schema: apiV1SocialAccountConnectionCheck503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1SocialAccountConnectionCheck504Error1",
        decode: { kind: "json", schema: apiV1SocialAccountConnectionCheck504Error1Schema },
      },
    ];
  }

  export type SocialAccountCopyRequest = {
    /** Body */
    body?: ApiV1SocialAccountCopyRequest;
  };

  export class SocialAccountCopyError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1SocialAccountCopy400Error1", ApiV1SocialAccountCopy400Error1>
      | Declared<"apiV1SocialAccountCopy401Error1", ApiV1SocialAccountCopy401Error1>
      | Declared<"apiV1SocialAccountCopy403Error1", ApiV1SocialAccountCopy403Error1>
      | Declared<"apiV1SocialAccountCopy404Error1", ApiV1SocialAccountCopy404Error1>
      | Declared<"apiV1SocialAccountCopy429Error1", ApiV1SocialAccountCopy429Error1>
      | Declared<"apiV1SocialAccountCopy500Error1", ApiV1SocialAccountCopy500Error1>
      | Declared<"apiV1SocialAccountCopy502Error1", ApiV1SocialAccountCopy502Error1>
      | Declared<"apiV1SocialAccountCopy503Error1", ApiV1SocialAccountCopy503Error1>
      | Declared<"apiV1SocialAccountCopy504Error1", ApiV1SocialAccountCopy504Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<SocialAccountCopyError> = [
      {
        on: 400,
        kind: "apiV1SocialAccountCopy400Error1",
        decode: { kind: "json", schema: apiV1SocialAccountCopy400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1SocialAccountCopy401Error1",
        decode: { kind: "json", schema: apiV1SocialAccountCopy401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1SocialAccountCopy403Error1",
        decode: { kind: "json", schema: apiV1SocialAccountCopy403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1SocialAccountCopy404Error1",
        decode: { kind: "json", schema: apiV1SocialAccountCopy404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1SocialAccountCopy429Error1",
        decode: { kind: "json", schema: apiV1SocialAccountCopy429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1SocialAccountCopy500Error1",
        decode: { kind: "json", schema: apiV1SocialAccountCopy500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1SocialAccountCopy502Error1",
        decode: { kind: "json", schema: apiV1SocialAccountCopy502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1SocialAccountCopy503Error1",
        decode: { kind: "json", schema: apiV1SocialAccountCopy503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1SocialAccountCopy504Error1",
        decode: { kind: "json", schema: apiV1SocialAccountCopy504Error1Schema },
      },
    ];
  }

  export type SocialAccountCreatePortalLinkRequest = {
    /** Body */
    body?: ApiV1SocialAccountCreatePortalLinkRequest;
  };

  export class SocialAccountCreatePortalLinkError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1SocialAccountCreatePortalLink400Error1", ApiV1SocialAccountCreatePortalLink400Error1>
      | Declared<"apiV1SocialAccountCreatePortalLink401Error1", ApiV1SocialAccountCreatePortalLink401Error1>
      | Declared<"apiV1SocialAccountCreatePortalLink403Error1", ApiV1SocialAccountCreatePortalLink403Error1>
      | Declared<"apiV1SocialAccountCreatePortalLink404Error1", ApiV1SocialAccountCreatePortalLink404Error1>
      | Declared<"apiV1SocialAccountCreatePortalLink429Error1", ApiV1SocialAccountCreatePortalLink429Error1>
      | Declared<"apiV1SocialAccountCreatePortalLink500Error1", ApiV1SocialAccountCreatePortalLink500Error1>
      | Declared<"apiV1SocialAccountCreatePortalLink502Error1", ApiV1SocialAccountCreatePortalLink502Error1>
      | Declared<"apiV1SocialAccountCreatePortalLink503Error1", ApiV1SocialAccountCreatePortalLink503Error1>
      | Declared<"apiV1SocialAccountCreatePortalLink504Error1", ApiV1SocialAccountCreatePortalLink504Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<SocialAccountCreatePortalLinkError> = [
      {
        on: 400,
        kind: "apiV1SocialAccountCreatePortalLink400Error1",
        decode: { kind: "json", schema: apiV1SocialAccountCreatePortalLink400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1SocialAccountCreatePortalLink401Error1",
        decode: { kind: "json", schema: apiV1SocialAccountCreatePortalLink401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1SocialAccountCreatePortalLink403Error1",
        decode: { kind: "json", schema: apiV1SocialAccountCreatePortalLink403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1SocialAccountCreatePortalLink404Error1",
        decode: { kind: "json", schema: apiV1SocialAccountCreatePortalLink404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1SocialAccountCreatePortalLink429Error1",
        decode: { kind: "json", schema: apiV1SocialAccountCreatePortalLink429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1SocialAccountCreatePortalLink500Error1",
        decode: { kind: "json", schema: apiV1SocialAccountCreatePortalLink500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1SocialAccountCreatePortalLink502Error1",
        decode: { kind: "json", schema: apiV1SocialAccountCreatePortalLink502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1SocialAccountCreatePortalLink503Error1",
        decode: { kind: "json", schema: apiV1SocialAccountCreatePortalLink503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1SocialAccountCreatePortalLink504Error1",
        decode: { kind: "json", schema: apiV1SocialAccountCreatePortalLink504Error1Schema },
      },
    ];
  }

  export type SocialAccountDisableMessagingRequest = {
    /** Body */
    body?: ApiV1SocialAccountMessagingDisableRequest;
  };

  export class SocialAccountDisableMessagingError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1SocialAccountMessagingDisable400Error1", ApiV1SocialAccountMessagingDisable400Error1>
      | Declared<"apiV1SocialAccountMessagingDisable401Error1", ApiV1SocialAccountMessagingDisable401Error1>
      | Declared<"apiV1SocialAccountMessagingDisable403Error1", ApiV1SocialAccountMessagingDisable403Error1>
      | Declared<"apiV1SocialAccountMessagingDisable404Error1", ApiV1SocialAccountMessagingDisable404Error1>
      | Declared<"apiV1SocialAccountMessagingDisable429Error1", ApiV1SocialAccountMessagingDisable429Error1>
      | Declared<"apiV1SocialAccountMessagingDisable500Error1", ApiV1SocialAccountMessagingDisable500Error1>
      | Declared<"apiV1SocialAccountMessagingDisable502Error1", ApiV1SocialAccountMessagingDisable502Error1>
      | Declared<"apiV1SocialAccountMessagingDisable503Error1", ApiV1SocialAccountMessagingDisable503Error1>
      | Declared<"apiV1SocialAccountMessagingDisable504Error1", ApiV1SocialAccountMessagingDisable504Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<SocialAccountDisableMessagingError> = [
      {
        on: 400,
        kind: "apiV1SocialAccountMessagingDisable400Error1",
        decode: { kind: "json", schema: apiV1SocialAccountMessagingDisable400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1SocialAccountMessagingDisable401Error1",
        decode: { kind: "json", schema: apiV1SocialAccountMessagingDisable401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1SocialAccountMessagingDisable403Error1",
        decode: { kind: "json", schema: apiV1SocialAccountMessagingDisable403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1SocialAccountMessagingDisable404Error1",
        decode: { kind: "json", schema: apiV1SocialAccountMessagingDisable404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1SocialAccountMessagingDisable429Error1",
        decode: { kind: "json", schema: apiV1SocialAccountMessagingDisable429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1SocialAccountMessagingDisable500Error1",
        decode: { kind: "json", schema: apiV1SocialAccountMessagingDisable500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1SocialAccountMessagingDisable502Error1",
        decode: { kind: "json", schema: apiV1SocialAccountMessagingDisable502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1SocialAccountMessagingDisable503Error1",
        decode: { kind: "json", schema: apiV1SocialAccountMessagingDisable503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1SocialAccountMessagingDisable504Error1",
        decode: { kind: "json", schema: apiV1SocialAccountMessagingDisable504Error1Schema },
      },
    ];
  }

  export type SocialAccountDisconnectRequest = {
    /** Body */
    body?: ApiV1SocialAccountDisconnectRequest;
  };

  export class SocialAccountDisconnectError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1SocialAccountDisconnect400Error1", ApiV1SocialAccountDisconnect400Error1>
      | Declared<"apiV1SocialAccountDisconnect401Error1", ApiV1SocialAccountDisconnect401Error1>
      | Declared<"apiV1SocialAccountDisconnect403Error1", ApiV1SocialAccountDisconnect403Error1>
      | Declared<"apiV1SocialAccountDisconnect404Error1", ApiV1SocialAccountDisconnect404Error1>
      | Declared<"apiV1SocialAccountDisconnect429Error1", ApiV1SocialAccountDisconnect429Error1>
      | Declared<"apiV1SocialAccountDisconnect500Error1", ApiV1SocialAccountDisconnect500Error1>
      | Declared<"apiV1SocialAccountDisconnect502Error1", ApiV1SocialAccountDisconnect502Error1>
      | Declared<"apiV1SocialAccountDisconnect503Error1", ApiV1SocialAccountDisconnect503Error1>
      | Declared<"apiV1SocialAccountDisconnect504Error1", ApiV1SocialAccountDisconnect504Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<SocialAccountDisconnectError> = [
      {
        on: 400,
        kind: "apiV1SocialAccountDisconnect400Error1",
        decode: { kind: "json", schema: apiV1SocialAccountDisconnect400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1SocialAccountDisconnect401Error1",
        decode: { kind: "json", schema: apiV1SocialAccountDisconnect401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1SocialAccountDisconnect403Error1",
        decode: { kind: "json", schema: apiV1SocialAccountDisconnect403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1SocialAccountDisconnect404Error1",
        decode: { kind: "json", schema: apiV1SocialAccountDisconnect404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1SocialAccountDisconnect429Error1",
        decode: { kind: "json", schema: apiV1SocialAccountDisconnect429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1SocialAccountDisconnect500Error1",
        decode: { kind: "json", schema: apiV1SocialAccountDisconnect500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1SocialAccountDisconnect502Error1",
        decode: { kind: "json", schema: apiV1SocialAccountDisconnect502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1SocialAccountDisconnect503Error1",
        decode: { kind: "json", schema: apiV1SocialAccountDisconnect503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1SocialAccountDisconnect504Error1",
        decode: { kind: "json", schema: apiV1SocialAccountDisconnect504Error1Schema },
      },
    ];
  }

  export type SocialAccountEnableMessagingRequest = {
    /** Body */
    body?: ApiV1SocialAccountMessagingEnableRequest;
  };

  export class SocialAccountEnableMessagingError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1SocialAccountMessagingEnable400Error1", ApiV1SocialAccountMessagingEnable400Error1>
      | Declared<"apiV1SocialAccountMessagingEnable401Error1", ApiV1SocialAccountMessagingEnable401Error1>
      | Declared<"apiV1SocialAccountMessagingEnable403Error1", ApiV1SocialAccountMessagingEnable403Error1>
      | Declared<"apiV1SocialAccountMessagingEnable404Error1", ApiV1SocialAccountMessagingEnable404Error1>
      | Declared<"apiV1SocialAccountMessagingEnable429Error1", ApiV1SocialAccountMessagingEnable429Error1>
      | Declared<"apiV1SocialAccountMessagingEnable500Error1", ApiV1SocialAccountMessagingEnable500Error1>
      | Declared<"apiV1SocialAccountMessagingEnable502Error1", ApiV1SocialAccountMessagingEnable502Error1>
      | Declared<"apiV1SocialAccountMessagingEnable503Error1", ApiV1SocialAccountMessagingEnable503Error1>
      | Declared<"apiV1SocialAccountMessagingEnable504Error1", ApiV1SocialAccountMessagingEnable504Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<SocialAccountEnableMessagingError> = [
      {
        on: 400,
        kind: "apiV1SocialAccountMessagingEnable400Error1",
        decode: { kind: "json", schema: apiV1SocialAccountMessagingEnable400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1SocialAccountMessagingEnable401Error1",
        decode: { kind: "json", schema: apiV1SocialAccountMessagingEnable401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1SocialAccountMessagingEnable403Error1",
        decode: { kind: "json", schema: apiV1SocialAccountMessagingEnable403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1SocialAccountMessagingEnable404Error1",
        decode: { kind: "json", schema: apiV1SocialAccountMessagingEnable404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1SocialAccountMessagingEnable429Error1",
        decode: { kind: "json", schema: apiV1SocialAccountMessagingEnable429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1SocialAccountMessagingEnable500Error1",
        decode: { kind: "json", schema: apiV1SocialAccountMessagingEnable500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1SocialAccountMessagingEnable502Error1",
        decode: { kind: "json", schema: apiV1SocialAccountMessagingEnable502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1SocialAccountMessagingEnable503Error1",
        decode: { kind: "json", schema: apiV1SocialAccountMessagingEnable503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1SocialAccountMessagingEnable504Error1",
        decode: { kind: "json", schema: apiV1SocialAccountMessagingEnable504Error1Schema },
      },
    ];
  }

  export type SocialAccountGetAccountsToDeleteRequest = {
    /** @default 1 */
    page?: number;
    /** @default 20 */
    pageSize?: number;
  };

  export const socialAccountGetAccountsToDeleteRequestSchema: Schema<SocialAccountGetAccountsToDeleteRequest> =
    s.lazySchema(() =>
      s.object<SocialAccountGetAccountsToDeleteRequest>({
        page: s.defaulted(s.float64().check(s.gte(1)), 1),
        pageSize: s.defaulted(s.float64().check(s.gte(1), s.lte(100)), 20),
      }),
    );

  export class SocialAccountGetAccountsToDeleteError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1SocialAccountToDelete400Error1", ApiV1SocialAccountToDelete400Error1>
      | Declared<"apiV1SocialAccountToDelete401Error1", ApiV1SocialAccountToDelete401Error1>
      | Declared<"apiV1SocialAccountToDelete403Error1", ApiV1SocialAccountToDelete403Error1>
      | Declared<"apiV1SocialAccountToDelete404Error1", ApiV1SocialAccountToDelete404Error1>
      | Declared<"apiV1SocialAccountToDelete429Error1", ApiV1SocialAccountToDelete429Error1>
      | Declared<"apiV1SocialAccountToDelete500Error1", ApiV1SocialAccountToDelete500Error1>
      | Declared<"apiV1SocialAccountToDelete502Error1", ApiV1SocialAccountToDelete502Error1>
      | Declared<"apiV1SocialAccountToDelete503Error1", ApiV1SocialAccountToDelete503Error1>
      | Declared<"apiV1SocialAccountToDelete504Error1", ApiV1SocialAccountToDelete504Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<SocialAccountGetAccountsToDeleteError> = [
      {
        on: 400,
        kind: "apiV1SocialAccountToDelete400Error1",
        decode: { kind: "json", schema: apiV1SocialAccountToDelete400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1SocialAccountToDelete401Error1",
        decode: { kind: "json", schema: apiV1SocialAccountToDelete401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1SocialAccountToDelete403Error1",
        decode: { kind: "json", schema: apiV1SocialAccountToDelete403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1SocialAccountToDelete404Error1",
        decode: { kind: "json", schema: apiV1SocialAccountToDelete404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1SocialAccountToDelete429Error1",
        decode: { kind: "json", schema: apiV1SocialAccountToDelete429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1SocialAccountToDelete500Error1",
        decode: { kind: "json", schema: apiV1SocialAccountToDelete500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1SocialAccountToDelete502Error1",
        decode: { kind: "json", schema: apiV1SocialAccountToDelete502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1SocialAccountToDelete503Error1",
        decode: { kind: "json", schema: apiV1SocialAccountToDelete503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1SocialAccountToDelete504Error1",
        decode: { kind: "json", schema: apiV1SocialAccountToDelete504Error1Schema },
      },
    ];
  }

  export type SocialAccountGetByTypeRequest = {
    type: Type;
    teamId: string;
  };

  export class SocialAccountGetByTypeError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1SocialAccountByType400Error1", ApiV1SocialAccountByType400Error1>
      | Declared<"apiV1SocialAccountByType401Error1", ApiV1SocialAccountByType401Error1>
      | Declared<"apiV1SocialAccountByType403Error1", ApiV1SocialAccountByType403Error1>
      | Declared<"apiV1SocialAccountByType404Error1", ApiV1SocialAccountByType404Error1>
      | Declared<"apiV1SocialAccountByType429Error1", ApiV1SocialAccountByType429Error1>
      | Declared<"apiV1SocialAccountByType500Error1", ApiV1SocialAccountByType500Error1>
      | Declared<"apiV1SocialAccountByType502Error1", ApiV1SocialAccountByType502Error1>
      | Declared<"apiV1SocialAccountByType503Error1", ApiV1SocialAccountByType503Error1>
      | Declared<"apiV1SocialAccountByType504Error1", ApiV1SocialAccountByType504Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<SocialAccountGetByTypeError> = [
      {
        on: 400,
        kind: "apiV1SocialAccountByType400Error1",
        decode: { kind: "json", schema: apiV1SocialAccountByType400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1SocialAccountByType401Error1",
        decode: { kind: "json", schema: apiV1SocialAccountByType401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1SocialAccountByType403Error1",
        decode: { kind: "json", schema: apiV1SocialAccountByType403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1SocialAccountByType404Error1",
        decode: { kind: "json", schema: apiV1SocialAccountByType404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1SocialAccountByType429Error1",
        decode: { kind: "json", schema: apiV1SocialAccountByType429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1SocialAccountByType500Error1",
        decode: { kind: "json", schema: apiV1SocialAccountByType500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1SocialAccountByType502Error1",
        decode: { kind: "json", schema: apiV1SocialAccountByType502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1SocialAccountByType503Error1",
        decode: { kind: "json", schema: apiV1SocialAccountByType503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1SocialAccountByType504Error1",
        decode: { kind: "json", schema: apiV1SocialAccountByType504Error1Schema },
      },
    ];
  }

  export type SocialAccountProfileRefreshRequest = {
    /** Body */
    body?: ApiV1SocialAccountProfileRefreshRequest;
  };

  export class SocialAccountProfileRefreshError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1SocialAccountProfileRefresh400Error1", ApiV1SocialAccountProfileRefresh400Error1>
      | Declared<"apiV1SocialAccountProfileRefresh401Error1", ApiV1SocialAccountProfileRefresh401Error1>
      | Declared<"apiV1SocialAccountProfileRefresh403Error1", ApiV1SocialAccountProfileRefresh403Error1>
      | Declared<"apiV1SocialAccountProfileRefresh404Error1", ApiV1SocialAccountProfileRefresh404Error1>
      | Declared<"apiV1SocialAccountProfileRefresh429Error1", ApiV1SocialAccountProfileRefresh429Error1>
      | Declared<"apiV1SocialAccountProfileRefresh500Error1", ApiV1SocialAccountProfileRefresh500Error1>
      | Declared<"apiV1SocialAccountProfileRefresh502Error1", ApiV1SocialAccountProfileRefresh502Error1>
      | Declared<"apiV1SocialAccountProfileRefresh503Error1", ApiV1SocialAccountProfileRefresh503Error1>
      | Declared<"apiV1SocialAccountProfileRefresh504Error1", ApiV1SocialAccountProfileRefresh504Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<SocialAccountProfileRefreshError> = [
      {
        on: 400,
        kind: "apiV1SocialAccountProfileRefresh400Error1",
        decode: { kind: "json", schema: apiV1SocialAccountProfileRefresh400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1SocialAccountProfileRefresh401Error1",
        decode: { kind: "json", schema: apiV1SocialAccountProfileRefresh401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1SocialAccountProfileRefresh403Error1",
        decode: { kind: "json", schema: apiV1SocialAccountProfileRefresh403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1SocialAccountProfileRefresh404Error1",
        decode: { kind: "json", schema: apiV1SocialAccountProfileRefresh404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1SocialAccountProfileRefresh429Error1",
        decode: { kind: "json", schema: apiV1SocialAccountProfileRefresh429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1SocialAccountProfileRefresh500Error1",
        decode: { kind: "json", schema: apiV1SocialAccountProfileRefresh500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1SocialAccountProfileRefresh502Error1",
        decode: { kind: "json", schema: apiV1SocialAccountProfileRefresh502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1SocialAccountProfileRefresh503Error1",
        decode: { kind: "json", schema: apiV1SocialAccountProfileRefresh503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1SocialAccountProfileRefresh504Error1",
        decode: { kind: "json", schema: apiV1SocialAccountProfileRefresh504Error1Schema },
      },
    ];
  }

  export type SocialAccountRefreshChannelsRequest = {
    /** Body */
    body?: ApiV1SocialAccountRefreshChannelsRequest;
  };

  export class SocialAccountRefreshChannelsError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1SocialAccountRefreshChannels400Error1", ApiV1SocialAccountRefreshChannels400Error1>
      | Declared<"apiV1SocialAccountRefreshChannels401Error1", ApiV1SocialAccountRefreshChannels401Error1>
      | Declared<"apiV1SocialAccountRefreshChannels403Error1", ApiV1SocialAccountRefreshChannels403Error1>
      | Declared<"apiV1SocialAccountRefreshChannels404Error1", ApiV1SocialAccountRefreshChannels404Error1>
      | Declared<"apiV1SocialAccountRefreshChannels429Error1", ApiV1SocialAccountRefreshChannels429Error1>
      | Declared<"apiV1SocialAccountRefreshChannels500Error1", ApiV1SocialAccountRefreshChannels500Error1>
      | Declared<"apiV1SocialAccountRefreshChannels502Error1", ApiV1SocialAccountRefreshChannels502Error1>
      | Declared<"apiV1SocialAccountRefreshChannels503Error1", ApiV1SocialAccountRefreshChannels503Error1>
      | Declared<"apiV1SocialAccountRefreshChannels504Error1", ApiV1SocialAccountRefreshChannels504Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<SocialAccountRefreshChannelsError> = [
      {
        on: 400,
        kind: "apiV1SocialAccountRefreshChannels400Error1",
        decode: { kind: "json", schema: apiV1SocialAccountRefreshChannels400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1SocialAccountRefreshChannels401Error1",
        decode: { kind: "json", schema: apiV1SocialAccountRefreshChannels401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1SocialAccountRefreshChannels403Error1",
        decode: { kind: "json", schema: apiV1SocialAccountRefreshChannels403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1SocialAccountRefreshChannels404Error1",
        decode: { kind: "json", schema: apiV1SocialAccountRefreshChannels404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1SocialAccountRefreshChannels429Error1",
        decode: { kind: "json", schema: apiV1SocialAccountRefreshChannels429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1SocialAccountRefreshChannels500Error1",
        decode: { kind: "json", schema: apiV1SocialAccountRefreshChannels500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1SocialAccountRefreshChannels502Error1",
        decode: { kind: "json", schema: apiV1SocialAccountRefreshChannels502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1SocialAccountRefreshChannels503Error1",
        decode: { kind: "json", schema: apiV1SocialAccountRefreshChannels503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1SocialAccountRefreshChannels504Error1",
        decode: { kind: "json", schema: apiV1SocialAccountRefreshChannels504Error1Schema },
      },
    ];
  }

  export type SocialAccountSetChannelRequest = {
    /** Body */
    body?: ApiV1SocialAccountSetChannelRequest;
  };

  export class SocialAccountSetChannelError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1SocialAccountSetChannel400Error1", ApiV1SocialAccountSetChannel400Error1>
      | Declared<"apiV1SocialAccountSetChannel401Error1", ApiV1SocialAccountSetChannel401Error1>
      | Declared<"apiV1SocialAccountSetChannel403Error1", ApiV1SocialAccountSetChannel403Error1>
      | Declared<"apiV1SocialAccountSetChannel404Error1", ApiV1SocialAccountSetChannel404Error1>
      | Declared<"apiV1SocialAccountSetChannel429Error1", ApiV1SocialAccountSetChannel429Error1>
      | Declared<"apiV1SocialAccountSetChannel500Error1", ApiV1SocialAccountSetChannel500Error1>
      | Declared<"apiV1SocialAccountSetChannel502Error1", ApiV1SocialAccountSetChannel502Error1>
      | Declared<"apiV1SocialAccountSetChannel503Error1", ApiV1SocialAccountSetChannel503Error1>
      | Declared<"apiV1SocialAccountSetChannel504Error1", ApiV1SocialAccountSetChannel504Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<SocialAccountSetChannelError> = [
      {
        on: 400,
        kind: "apiV1SocialAccountSetChannel400Error1",
        decode: { kind: "json", schema: apiV1SocialAccountSetChannel400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1SocialAccountSetChannel401Error1",
        decode: { kind: "json", schema: apiV1SocialAccountSetChannel401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1SocialAccountSetChannel403Error1",
        decode: { kind: "json", schema: apiV1SocialAccountSetChannel403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1SocialAccountSetChannel404Error1",
        decode: { kind: "json", schema: apiV1SocialAccountSetChannel404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1SocialAccountSetChannel429Error1",
        decode: { kind: "json", schema: apiV1SocialAccountSetChannel429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1SocialAccountSetChannel500Error1",
        decode: { kind: "json", schema: apiV1SocialAccountSetChannel500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1SocialAccountSetChannel502Error1",
        decode: { kind: "json", schema: apiV1SocialAccountSetChannel502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1SocialAccountSetChannel503Error1",
        decode: { kind: "json", schema: apiV1SocialAccountSetChannel503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1SocialAccountSetChannel504Error1",
        decode: { kind: "json", schema: apiV1SocialAccountSetChannel504Error1Schema },
      },
    ];
  }

  export type SocialAccountUnsetChannelRequest = {
    /** Body */
    body?: ApiV1SocialAccountUnsetChannelRequest;
  };

  export class SocialAccountUnsetChannelError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1SocialAccountUnsetChannel400Error1", ApiV1SocialAccountUnsetChannel400Error1>
      | Declared<"apiV1SocialAccountUnsetChannel401Error1", ApiV1SocialAccountUnsetChannel401Error1>
      | Declared<"apiV1SocialAccountUnsetChannel403Error1", ApiV1SocialAccountUnsetChannel403Error1>
      | Declared<"apiV1SocialAccountUnsetChannel404Error1", ApiV1SocialAccountUnsetChannel404Error1>
      | Declared<"apiV1SocialAccountUnsetChannel429Error1", ApiV1SocialAccountUnsetChannel429Error1>
      | Declared<"apiV1SocialAccountUnsetChannel500Error1", ApiV1SocialAccountUnsetChannel500Error1>
      | Declared<"apiV1SocialAccountUnsetChannel502Error1", ApiV1SocialAccountUnsetChannel502Error1>
      | Declared<"apiV1SocialAccountUnsetChannel503Error1", ApiV1SocialAccountUnsetChannel503Error1>
      | Declared<"apiV1SocialAccountUnsetChannel504Error1", ApiV1SocialAccountUnsetChannel504Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<SocialAccountUnsetChannelError> = [
      {
        on: 400,
        kind: "apiV1SocialAccountUnsetChannel400Error1",
        decode: { kind: "json", schema: apiV1SocialAccountUnsetChannel400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1SocialAccountUnsetChannel401Error1",
        decode: { kind: "json", schema: apiV1SocialAccountUnsetChannel401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1SocialAccountUnsetChannel403Error1",
        decode: { kind: "json", schema: apiV1SocialAccountUnsetChannel403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1SocialAccountUnsetChannel404Error1",
        decode: { kind: "json", schema: apiV1SocialAccountUnsetChannel404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1SocialAccountUnsetChannel429Error1",
        decode: { kind: "json", schema: apiV1SocialAccountUnsetChannel429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1SocialAccountUnsetChannel500Error1",
        decode: { kind: "json", schema: apiV1SocialAccountUnsetChannel500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1SocialAccountUnsetChannel502Error1",
        decode: { kind: "json", schema: apiV1SocialAccountUnsetChannel502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1SocialAccountUnsetChannel503Error1",
        decode: { kind: "json", schema: apiV1SocialAccountUnsetChannel503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1SocialAccountUnsetChannel504Error1",
        decode: { kind: "json", schema: apiV1SocialAccountUnsetChannel504Error1Schema },
      },
    ];
  }
}
