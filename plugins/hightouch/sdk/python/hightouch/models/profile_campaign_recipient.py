from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ProfileCampaignRecipient(SdkBaseModel):
    """A recipient identified by their Personalization API Cached profile ID. Template variables are checked at send
    time, after the cached profile is merged with ``properties``. A required variable (one without a Liquid default)
    missing from both drops the send, which the send status endpoint reports as ``dropped``. A variable present with a
    null or empty value renders blank."""

    id: Optional[str] = UNSET
    """Primary key of the recipient as configured on the Personalization API sync. The delivery address is resolved from
    the cache at send time."""

    properties: Optional[dict[str, Any]] = UNSET
    """Per-recipient personalization overrides. Merged with the top-level ``properties`` and the cached profile; these
    values take precedence when a key appears in multiple sources."""

    locale: Optional[str] = UNSET
    """The recipient's locale as a BCP 47 language tag, such as ``es-ES``, matched against the locales the message is
    localized into (case-insensitive). When omitted, the recipient gets the message's source language. A locale the
    message is not localized into follows the workspace's localization fallback setting. At most 7 characters."""


class ProfileCampaignRecipientDict(TypedDict):
    id: NotRequired[str]
    properties: NotRequired[dict[str, Any]]
    locale: NotRequired[str]
