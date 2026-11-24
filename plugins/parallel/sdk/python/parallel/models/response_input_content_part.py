from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ResponseInputContentPart(SdkBaseModel):
    """A single content part of a message, e.g. ``{"text": "hi", "type": "input_text"}``. Only text parts are supported;
    requests containing image, audio, or file parts fail with a 422 error."""

    type_: Optional[str] = Field(default=UNSET, alias="type")
    """The content part type. Supported: ``input_text``, ``output_text``, and ``text``. Multimodal types
    (``input_image``, ``input_audio``, ``input_file``) are rejected with a 422 error."""

    text: Optional[str] = UNSET
    """The text payload, when the part carries one."""


class ResponseInputContentPartDict(TypedDict):
    type_: NotRequired[str]
    text: NotRequired[str]
