from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GcsSource4(SdkBaseModel):
    """Google Cloud Storage location for the source input. This can be a single file (for example,
    ``gs://translation-test/input.docx``) or a wildcard (for example, ``gs://translation-test/*``). File mime type is
    determined based on extension. Supported mime type includes: - ``pdf``, application/pdf - ``docx``,
    application/vnd.openxmlformats-officedocument.wordprocessingml.document - ``pptx``,
    application/vnd.openxmlformats-officedocument.presentationml.presentation - ``xlsx``,
    application/vnd.openxmlformats-officedocument.spreadsheetml.sheet The max file size to support for ``.docx``,
    ``.pptx`` and ``.xlsx`` is 100MB. The max file size to support for ``.pdf`` is 1GB and the max page limit is 1000
    pages. The max file size to support for all input documents is 1GB."""

    input_uri: Optional[str] = Field(default=UNSET, alias="inputUri")
    """Required. Source data URI. For example, ``gs://my_bucket/my_object``."""


class GcsSource4Dict(TypedDict):
    input_uri: NotRequired[str]
