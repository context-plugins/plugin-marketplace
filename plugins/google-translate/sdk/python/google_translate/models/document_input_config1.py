from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .gcs_source1 import GcsSource1, GcsSource1Dict


class DocumentInputConfig1(SdkBaseModel):
    """Optional. The document configuration of the input."""

    gcs_source: Optional[GcsSource1] = Field(default=UNSET, alias="gcsSource")
    """Google Cloud Storage location. This must be a single file. For example: gs://example_bucket/example_file.pdf"""

    content: Optional[str] = UNSET
    """Document's content represented as a stream of bytes."""

    mime_type: Optional[str] = Field(default=UNSET, alias="mimeType")
    """Specifies the input document's mime_type. If not specified it will be determined using the file extension for
    gcs_source provided files. For a file provided through bytes content the mime_type must be provided. Currently
    supported mime types are: - application/pdf -
    application/vnd.openxmlformats-officedocument.wordprocessingml.document -
    application/vnd.openxmlformats-officedocument.presentationml.presentation -
    application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"""


class DocumentInputConfig1Dict(TypedDict):
    gcs_source: NotRequired[GcsSource1Dict]
    content: NotRequired[str]
    mime_type: NotRequired[str]
