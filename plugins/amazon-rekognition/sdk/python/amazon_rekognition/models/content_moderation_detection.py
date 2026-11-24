from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .content_type import ContentType, ContentTypeDict
from .moderation_label import ModerationLabel, ModerationLabelDict


class ContentModerationDetection(SdkBaseModel):
    timestamp: Optional[int] = Field(default=UNSET, alias="Timestamp")
    """Time, in milliseconds from the beginning of the video, that the content moderation label was detected. Note that
    Timestamp is not guaranteed to be accurate to the individual frame where the moderated content first appears."""

    moderation_label: Optional[ModerationLabel] = Field(default=UNSET, alias="ModerationLabel")
    start_timestamp_millis: Optional[int] = Field(default=UNSET, alias="StartTimestampMillis")
    """The time in milliseconds defining the start of the timeline segment containing a continuously detected moderation
    label."""

    end_timestamp_millis: Optional[int] = Field(default=UNSET, alias="EndTimestampMillis")
    """The time in milliseconds defining the end of the timeline segment containing a continuously detected moderation
    label."""

    duration_millis: Optional[int] = Field(default=UNSET, alias="DurationMillis")
    """The time duration of a segment in milliseconds, I.e. time elapsed from StartTimestampMillis to
    EndTimestampMillis."""

    content_types: Optional[list[ContentType]] = Field(default=UNSET, alias="ContentTypes")
    """A list of predicted results for the type of content an image contains. For example, the image content might be
    from animation, sports, or a video game."""


class ContentModerationDetectionDict(TypedDict):
    timestamp: NotRequired[int]
    moderation_label: NotRequired[ModerationLabelDict]
    start_timestamp_millis: NotRequired[int]
    end_timestamp_millis: NotRequired[int]
    duration_millis: NotRequired[int]
    content_types: NotRequired[list[ContentTypeDict]]
