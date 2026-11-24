from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .gcs_source3 import GcsSource3, GcsSource3Dict


class GlossaryInputConfig2(SdkBaseModel):
    """Required. Provides examples to build the glossary from. Total glossary must not exceed 10M Unicode codepoints."""

    gcs_source: Optional[GcsSource3] = Field(default=UNSET, alias="gcsSource")
    """Required. Google Cloud Storage location of glossary data. File format is determined based on the filename
    extension. API returns [google.rpc.Code.INVALID_ARGUMENT] for unsupported URI-s and file formats. Wildcards are not
    allowed. This must be a single file in one of the following formats: For unidirectional glossaries: - TSV/CSV
    (``.tsv``/``.csv``): Two column file, tab- or comma-separated. The first column is source text. The second column is
    target text. No headers in this file. The first row contains data and not column names. - TMX (``.tmx``): TMX file
    with parallel data defining source/target term pairs. For equivalent term sets glossaries: - CSV (``.csv``):
    Multi-column CSV file defining equivalent glossary terms in multiple languages. See documentation for more
    information - `glossaries <https://cloud.google.com/translate/docs/advanced/glossary>`__."""


class GlossaryInputConfig2Dict(TypedDict):
    gcs_source: NotRequired[GcsSource3Dict]
