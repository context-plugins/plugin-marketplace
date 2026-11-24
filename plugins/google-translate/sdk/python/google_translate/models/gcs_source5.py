from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GcsSource5(SdkBaseModel):
    r"""Required. Google Cloud Storage location for the source input. This can be a single file (for example,
    ``gs://translation-test/input.tsv``) or a wildcard (for example, ``gs://translation-test/*``). If a file extension
    is ``.tsv``, it can contain either one or two columns. The first column (optional) is the id of the text request. If
    the first column is missing, we use the row number (0-based) from the input file as the ID in the output file. The
    second column is the actual text to be translated. We recommend each row be <= 10K Unicode codepoints, otherwise an
    error might be returned. Note that the input tsv must be RFC 4180 compliant. You could use
    https://github.com/Clever/csvlint to check potential formatting errors in your tsv file. csvlint --delimiter='\t'
    your_input_file.tsv The other supported file extensions are ``.txt`` or ``.html``, which is treated as a single
    large chunk of text."""

    input_uri: Optional[str] = Field(default=UNSET, alias="inputUri")
    """Required. Source data URI. For example, ``gs://my_bucket/my_object``."""


class GcsSource5Dict(TypedDict):
    input_uri: NotRequired[str]
