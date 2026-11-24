from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class AdOfferCampaign(SdkBaseModel):
    name: str
    """The campaign name."""

    message_to_publisher: Optional[str] = UNSET
    """The message from the advertiser to the publisher."""

    promoted_item: Optional[str] = UNSET
    """The item promoted by the campaign."""

    promoted_item_other: Optional[str] = UNSET
    """Additional promoted item details when applicable."""


class AdOfferCampaignDict(TypedDict):
    name: str
    message_to_publisher: NotRequired[str]
    promoted_item: NotRequired[str]
    promoted_item_other: NotRequired[str]
