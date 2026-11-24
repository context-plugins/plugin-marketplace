from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .content_type import ContentType, ContentTypeDict
from .human_loop_activation_output import HumanLoopActivationOutput, HumanLoopActivationOutputDict
from .moderation_label import ModerationLabel, ModerationLabelDict


class DetectModerationLabelsResponse(SdkBaseModel):
    moderation_labels: Optional[list[ModerationLabel]] = Field(default=UNSET, alias="ModerationLabels")
    """Array of detected Moderation labels. For video operations, this includes the time, in milliseconds from the start
    of the video, they were detected."""

    moderation_model_version: Optional[str] = Field(default=UNSET, alias="ModerationModelVersion")
    """Version number of the base moderation detection model that was used to detect unsafe content."""

    human_loop_activation_output: Optional[HumanLoopActivationOutput] = Field(
        default=UNSET, alias="HumanLoopActivationOutput"
    )
    project_version: Optional[str] = Field(default=UNSET, alias="ProjectVersion")
    """Identifier of the custom adapter that was used during inference. If during inference the adapter was EXPIRED,
    then the parameter will not be returned, indicating that a base moderation detection project version was used."""

    content_types: Optional[list[ContentType]] = Field(default=UNSET, alias="ContentTypes")
    """A list of predicted results for the type of content an image contains. For example, the image content might be
    from animation, sports, or a video game."""


class DetectModerationLabelsResponseDict(TypedDict):
    moderation_labels: NotRequired[list[ModerationLabelDict]]
    moderation_model_version: NotRequired[str]
    human_loop_activation_output: NotRequired[HumanLoopActivationOutputDict]
    project_version: NotRequired[str]
    content_types: NotRequired[list[ContentTypeDict]]
