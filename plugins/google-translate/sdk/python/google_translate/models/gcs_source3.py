from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GcsSource3(SdkBaseModel):
    """Required. Google Cloud Storage location of glossary data. File format is determined based on the filename
    extension. API returns [google.rpc.Code.INVALID_ARGUMENT] for unsupported URI-s and file formats. Wildcards are not
    allowed. This must be a single file in one of the following formats: For unidirectional glossaries: - TSV/CSV
    (``.tsv``/``.csv``): Two column file, tab- or comma-separated. The first column is source text. The second column is
    target text. No headers in this file. The first row contains data and not column names. - TMX (``.tmx``): TMX file
    with parallel data defining source/target term pairs. For equivalent term sets glossaries: - CSV (``.csv``):
    Multi-column CSV file defining equivalent glossary terms in multiple languages. See documentation for more
    information - `glossaries <https://cloud.google.com/translate/docs/advanced/glossary>`__."""

    input_uri: Optional[str] = Field(default=UNSET, alias="inputUri")
    """Required. Source data URI. For example, ``gs://my_bucket/my_object``."""


class GcsSource3Dict(TypedDict):
    input_uri: NotRequired[str]
