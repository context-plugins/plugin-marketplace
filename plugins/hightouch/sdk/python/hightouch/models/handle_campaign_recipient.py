from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class HandleCampaignRecipient(SdkBaseModel):
    """A recipient identified by their delivery address (email or phone number). Personalization data is provided inline
    in the request."""

    handle: Optional[str] = UNSET
    """Delivery address for this recipient. Must be a valid email address for email campaigns, or an E.164-formatted
    phone number for SMS and WhatsApp campaigns."""

    properties: Optional[dict[str, Any]] = UNSET
    """Per-recipient personalization properties. Keys must match the variable names shown in the message editor. These
    are merged with the top-level ``properties`` and take precedence when a key appears in both."""

    locale: Optional[str] = UNSET
    """The recipient's locale as a BCP 47 language tag, such as ``es-ES``, matched against the locales the message is
    localized into (case-insensitive). When omitted, the recipient gets the message's source language. A locale the
    message is not localized into follows the workspace's localization fallback setting. At most 7 characters."""


class HandleCampaignRecipientDict(TypedDict):
    handle: NotRequired[str]
    properties: NotRequired[dict[str, Any]]
    locale: NotRequired[str]
