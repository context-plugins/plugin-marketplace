from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .gcs_source5 import GcsSource5, GcsSource5Dict


class InputConfig(SdkBaseModel):
    """Input configuration for BatchTranslateText request."""

    mime_type: Optional[str] = Field(default=UNSET, alias="mimeType")
    """Optional. Can be "text/plain" or "text/html". For ``.tsv``, "text/html" is used if mime_type is missing. For
    ``.html``, this field must be "text/html" or empty. For ``.txt``, this field must be "text/plain" or empty."""

    gcs_source: Optional[GcsSource5] = Field(default=UNSET, alias="gcsSource")
    r"""Required. Google Cloud Storage location for the source input. This can be a single file (for example,
    ``gs://translation-test/input.tsv``) or a wildcard (for example, ``gs://translation-test/*``). If a file extension
    is ``.tsv``, it can contain either one or two columns. The first column (optional) is the id of the text request. If
    the first column is missing, we use the row number (0-based) from the input file as the ID in the output file. The
    second column is the actual text to be translated. We recommend each row be <= 10K Unicode codepoints, otherwise an
    error might be returned. Note that the input tsv must be RFC 4180 compliant. You could use
    https://github.com/Clever/csvlint to check potential formatting errors in your tsv file. csvlint --delimiter='\t'
    your_input_file.tsv The other supported file extensions are ``.txt`` or ``.html``, which is treated as a single
    large chunk of text."""


class InputConfigDict(TypedDict):
    mime_type: NotRequired[str]
    gcs_source: NotRequired[GcsSource5Dict]
