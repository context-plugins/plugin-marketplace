from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .glossary_term import GlossaryTerm, GlossaryTermDict


class GlossaryTermsSet(SdkBaseModel):
    """Represents a single entry for an equivalent term set glossary. This is used for equivalent term sets where each
    term can be replaced by the other terms in the set."""

    terms: Optional[list[GlossaryTerm]] = UNSET
    """Each term in the set represents a term that can be replaced by the other terms."""


class GlossaryTermsSetDict(TypedDict):
    terms: NotRequired[list[GlossaryTermDict]]
