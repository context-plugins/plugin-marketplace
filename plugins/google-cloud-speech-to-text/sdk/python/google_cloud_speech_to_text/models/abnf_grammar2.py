from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class AbnfGrammar2(SdkBaseModel):
    """Augmented Backus-Naur form (ABNF) is a standardized grammar notation comprised by a set of derivation rules. See
    specifications: https://www.w3.org/TR/speech-grammar"""

    abnf_strings: Optional[list[str]] = Field(default=UNSET, alias="abnfStrings")
    """All declarations and rules of an ABNF grammar broken up into multiple strings that will end up concatenated."""


class AbnfGrammar2Dict(TypedDict):
    abnf_strings: NotRequired[list[str]]
