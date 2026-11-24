from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.subscription_expanded_status2 import SubscriptionExpandedStatus2OrStr
from .publication2 import Publication2, Publication2Dict
from .subscription1 import Subscription1, Subscription1Dict


class PublicationsBySubscriptionEmailResponseItem(SdkBaseModel):
    publication_id: str
    """The prefixed ID of the publication"""

    publication_name: str
    """The name of the publication"""

    subscription_id: str
    """The prefixed ID of the subscription matching the email address for this publication"""

    status: SubscriptionExpandedStatus2OrStr
    """The status of the subscription matching the email address for this publication"""

    publication: Optional[Publication2] = UNSET
    """The full Publication object. Only present when ``expand`` includes ``publication``."""

    subscription: Optional[Subscription1] = UNSET
    """The Subscription object matching the email address for this publication. Only present when ``expand`` includes
    ``subscription`` or ``subscription_custom_fields``."""


class PublicationsBySubscriptionEmailResponseItemDict(TypedDict):
    publication_id: str
    publication_name: str
    subscription_id: str
    status: SubscriptionExpandedStatus2OrStr
    publication: NotRequired[Publication2Dict]
    subscription: NotRequired[Subscription1Dict]
