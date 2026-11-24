from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .glossary_terms_pair2 import GlossaryTermsPair2, GlossaryTermsPair2Dict
from .glossary_terms_set2 import GlossaryTermsSet2, GlossaryTermsSet2Dict


class GlossaryEntry(SdkBaseModel):
    """Represents a single entry in a glossary."""

    name: Optional[str] = UNSET
    """Identifier. The resource name of the entry. Format: ``projects/*/locations/*/glossaries/*/glossaryEntries/*``"""

    description: Optional[str] = UNSET
    """Describes the glossary entry."""

    terms_set: Optional[GlossaryTermsSet2] = Field(default=UNSET, alias="termsSet")
    """Used for an equivalent term sets glossary."""

    terms_pair: Optional[GlossaryTermsPair2] = Field(default=UNSET, alias="termsPair")
    """Used for an unidirectional glossary."""


class GlossaryEntryDict(TypedDict):
    name: NotRequired[str]
    description: NotRequired[str]
    terms_set: NotRequired[GlossaryTermsSet2Dict]
    terms_pair: NotRequired[GlossaryTermsPair2Dict]
