from __future__ import annotations

from typing import TypeAlias

from ..core import UnknownPayload, WebhookRequest, decode_json
from ..models.connection_updated_request import ConnectionUpdatedRequest
from ..models.location_sync_failed_request import LocationSyncFailedRequest
from ..models.location_sync_recovered_request import LocationSyncRecoveredRequest
from ..models.reply_failed_request import ReplyFailedRequest
from ..models.reply_published_request import ReplyPublishedRequest
from ..models.reply_unknown_request import ReplyUnknownRequest
from ..models.review_created_request import ReviewCreatedRequest
from ..models.review_updated_request import ReviewUpdatedRequest

PrismaReviewsEventPayload: TypeAlias = (
    ReviewCreatedRequest
    | ReviewUpdatedRequest
    | ReplyPublishedRequest
    | ReplyFailedRequest
    | ReplyUnknownRequest
    | ConnectionUpdatedRequest
    | LocationSyncFailedRequest
    | LocationSyncRecoveredRequest
)


def parse_webhook_event(request: WebhookRequest) -> PrismaReviewsEventPayload | UnknownPayload:
    try:
        return decode_json[PrismaReviewsEventPayload](request.body)
    except ValueError:
        return decode_json[UnknownPayload](request.body)
