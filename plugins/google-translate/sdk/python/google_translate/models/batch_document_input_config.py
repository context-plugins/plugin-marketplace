from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .gcs_source4 import GcsSource4, GcsSource4Dict


class BatchDocumentInputConfig(SdkBaseModel):
    """Input configuration for BatchTranslateDocument request."""

    gcs_source: Optional[GcsSource4] = Field(default=UNSET, alias="gcsSource")
    """Google Cloud Storage location for the source input. This can be a single file (for example,
    ``gs://translation-test/input.docx``) or a wildcard (for example, ``gs://translation-test/*``). File mime type is
    determined based on extension. Supported mime type includes: - ``pdf``, application/pdf - ``docx``,
    application/vnd.openxmlformats-officedocument.wordprocessingml.document - ``pptx``,
    application/vnd.openxmlformats-officedocument.presentationml.presentation - ``xlsx``,
    application/vnd.openxmlformats-officedocument.spreadsheetml.sheet The max file size to support for ``.docx``,
    ``.pptx`` and ``.xlsx`` is 100MB. The max file size to support for ``.pdf`` is 1GB and the max page limit is 1000
    pages. The max file size to support for all input documents is 1GB."""


class BatchDocumentInputConfigDict(TypedDict):
    gcs_source: NotRequired[GcsSource4Dict]
