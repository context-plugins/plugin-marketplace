from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.opt_in import OptInOrStr
from .enums.signup_channel import SignupChannelOrStr
from .unions.signup_traits_request import SignupTraitsRequest, SignupTraitsRequestDict


class CreateSignupRequest(SdkBaseModel):
    traits: Optional[dict[str, SignupTraitsRequest]] = UNSET
    """A signup's own fields, as collected by the form. They are written to the customer's warehouse and never stored by
    Hightouch."""

    opt_in: Optional[OptInOrStr] = Field(default=UNSET, alias="optIn")
    """Force an opt-in style. Omit to let the topic and channel decide; a value they cannot honor is refused rather than
    silently resolved."""

    source: Optional[str] = UNSET
    """Which form or landing page this signup came from."""

    topic_external_identifier: Optional[str] = Field(default=UNSET, alias="topicExternalIdentifier")
    topic_id: Optional[str] = Field(default=UNSET, alias="topicId")
    """The subscription topic being consented to, by id or external identifier. Omit both to record consent for the
    channel itself."""

    channel: SignupChannelOrStr
    """Delivery channels a signup can consent on."""

    handle: str
    """Email address or E.164 phone number, matching ``channel``."""


class CreateSignupRequestDict(TypedDict):
    traits: NotRequired[dict[str, SignupTraitsRequestDict]]
    opt_in: NotRequired[OptInOrStr]
    source: NotRequired[str]
    topic_external_identifier: NotRequired[str]
    topic_id: NotRequired[str]
    channel: SignupChannelOrStr
    handle: str
