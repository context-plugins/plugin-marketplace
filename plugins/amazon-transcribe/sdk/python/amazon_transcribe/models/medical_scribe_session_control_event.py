from __future__ import annotations

from typing import Literal

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class MedicalScribeSessionControlEvent(SdkBaseModel):
    type_: Literal["END_OF_SESSION"] = Field(default="END_OF_SESSION", alias="Type")
    """The type of MedicalScribeSessionControlEvent. Possible Values: END_OF_SESSION - Indicates the audio streaming is
    complete. After you send an END_OF_SESSION event, Amazon Web Services HealthScribe starts the post-stream analytics.
    The session can't be resumed after this event is sent. After Amazon Web Services HealthScribe processes the event,
    the real-time StreamStatus is COMPLETED. You get the StreamStatus and other stream details with the
    GetMedicalScribeStream API operation. For more information about different streaming statuses, see the StreamStatus
    description in the MedicalScribeStreamD"""


class MedicalScribeSessionControlEventDict(TypedDict):
    type_: Literal["END_OF_SESSION"]
