from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class PublicationsAutomationsJourneysRequest(SdkBaseModel):
    email: Optional[str] = UNSET
    """The email address associated with the subscription."""

    subscription_id: Optional[str] = UNSET
    """The prefixed ID of the subscription."""

    double_opt_override: Optional[str] = UNSET
    """Override the publication's default double opt-in settings for this subscription. Possible values are:
    - "on" — The subscriber will receive a double opt-in confirmation email and will need to confirm their subscription
        prior to being marked as active.
    - "off" — The subscriber will be marked as active immediately and will not receive a double opt-in confirmation
        email.
    - "not_set" — The publication's default double opt-in settings will be applied to this subscription."""


class PublicationsAutomationsJourneysRequestDict(TypedDict):
    email: NotRequired[str]
    subscription_id: NotRequired[str]
    double_opt_override: NotRequired[str]
