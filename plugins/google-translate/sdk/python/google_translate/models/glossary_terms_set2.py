from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .glossary_term import GlossaryTerm, GlossaryTermDict


class GlossaryTermsSet2(SdkBaseModel):
    """Used for an equivalent term sets glossary."""

    terms: Optional[list[GlossaryTerm]] = UNSET
    """Each term in the set represents a term that can be replaced by the other terms."""


class GlossaryTermsSet2Dict(TypedDict):
    terms: NotRequired[list[GlossaryTermDict]]
