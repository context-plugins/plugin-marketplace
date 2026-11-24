from __future__ import annotations

from typing import TypeAlias

from ..core import UnknownPayload, WebhookRequest, decode_json
from ..models.watchlist_webhook_event import WatchlistWebhookEvent

CompabaseEventPayload: TypeAlias = WatchlistWebhookEvent


def parse_webhook_event(request: WebhookRequest) -> CompabaseEventPayload | UnknownPayload:
    try:
        return decode_json[CompabaseEventPayload](request.body)
    except ValueError:
        return decode_json[UnknownPayload](request.body)
