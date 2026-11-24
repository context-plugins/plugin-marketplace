from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .enums.alert_type import AlertType, AlertTypeOrStr
from .enums.call_to_action_type import CallToActionTypeOrStr
from .enums.topic_type import TopicType, TopicTypeOrStr


class Googlebusiness(SdkBaseModel):
    text: OptionalNullable[str] = UNSET
    upload_ids: OptionalNullable[list[str]] = Field(default=UNSET, alias="uploadIds")
    """IDs of images/videos uploaded to bundle.social."""

    topic_type: TopicTypeOrStr | None = Field(default=TopicType.STANDARD, alias="topicType")
    language_code: OptionalNullable[str] = Field(default=UNSET, alias="languageCode")
    """Language tag like 'en' or 'en-US'."""

    call_to_action_type: OptionalNullable[CallToActionTypeOrStr] = Field(default=UNSET, alias="callToActionType")
    call_to_action_url: OptionalNullable[str] = Field(default=UNSET, alias="callToActionUrl")
    event_title: OptionalNullable[str] = Field(default=UNSET, alias="eventTitle")
    event_start_date: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="eventStartDate")
    event_end_date: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="eventEndDate")
    offer_coupon_code: OptionalNullable[str] = Field(default=UNSET, alias="offerCouponCode")
    offer_redeem_online_url: OptionalNullable[str] = Field(default=UNSET, alias="offerRedeemOnlineUrl")
    offer_terms_conditions: OptionalNullable[str] = Field(default=UNSET, alias="offerTermsConditions")
    alert_type: AlertTypeOrStr | None = Field(default=AlertType.COVID_19, alias="alertType")
    """Alert type for ALERT posts."""


class GooglebusinessDict(TypedDict):
    text: NotRequired[str | None]
    upload_ids: NotRequired[list[str] | None]
    topic_type: NotRequired[TopicTypeOrStr | None]
    language_code: NotRequired[str | None]
    call_to_action_type: NotRequired[CallToActionTypeOrStr | None]
    call_to_action_url: NotRequired[str | None]
    event_title: NotRequired[str | None]
    event_start_date: NotRequired[RFC3339DateTime | None]
    event_end_date: NotRequired[RFC3339DateTime | None]
    offer_coupon_code: NotRequired[str | None]
    offer_redeem_online_url: NotRequired[str | None]
    offer_terms_conditions: NotRequired[str | None]
    alert_type: NotRequired[AlertTypeOrStr | None]
