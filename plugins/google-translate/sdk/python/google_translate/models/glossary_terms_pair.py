from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .glossary_term1 import GlossaryTerm1, GlossaryTerm1Dict
from .glossary_term2 import GlossaryTerm2, GlossaryTerm2Dict


class GlossaryTermsPair(SdkBaseModel):
    """Represents a single entry for an unidirectional glossary."""

    source_term: Optional[GlossaryTerm1] = Field(default=UNSET, alias="sourceTerm")
    """The source term is the term that will get match in the text,"""

    target_term: Optional[GlossaryTerm2] = Field(default=UNSET, alias="targetTerm")
    """The term that will replace the match source term."""


class GlossaryTermsPairDict(TypedDict):
    source_term: NotRequired[GlossaryTerm1Dict]
    target_term: NotRequired[GlossaryTerm2Dict]
