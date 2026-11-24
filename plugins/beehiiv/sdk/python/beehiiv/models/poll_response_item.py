from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class PollResponseItem(SdkBaseModel):
    id: str
    """The unique identifier of the poll response."""

    subscription_id: Optional[str] = UNSET
    """The prefixed ID of the subscription that responded. Null if the subscription has been permanently deleted."""

    subscription_deleted: bool
    """Whether the associated subscription has been deleted or permanently removed."""

    poll_choice_id: str
    """The UUID of the poll choice selected."""

    poll_choice_label: Optional[str] = UNSET
    """The text label of the poll choice selected."""

    created_at: int
    """The time the response was created. Measured in seconds since the Unix epoch."""

    extended_feedback: Optional[str] = UNSET
    """Optional extended feedback provided by the subscriber."""

    post_id: Optional[str] = UNSET
    """The prefixed ID of the post where the response was collected. Only included when ``expand[]=post`` is
    specified."""

    post_title: Optional[str] = UNSET
    """The title of the post where the response was collected. Only included when ``expand[]=post`` is specified."""

    post_publish_date: Optional[int] = UNSET
    """The scheduled publication date of the post where the response was collected. Measured in seconds since the Unix
    epoch. Only included when ``expand[]=post`` is specified. Null if the post is not yet scheduled."""


class PollResponseItemDict(TypedDict):
    id: str
    subscription_id: NotRequired[str]
    subscription_deleted: bool
    poll_choice_id: str
    poll_choice_label: NotRequired[str]
    created_at: int
    extended_feedback: NotRequired[str]
    post_id: NotRequired[str]
    post_title: NotRequired[str]
    post_publish_date: NotRequired[int]
