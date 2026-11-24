from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class AbnfGrammar(SdkBaseModel):
    abnf_strings: Optional[list[str]] = Field(default=UNSET, alias="abnfStrings")
    """All declarations and rules of an ABNF grammar broken up into multiple strings that will end up concatenated."""


class AbnfGrammarDict(TypedDict):
    abnf_strings: NotRequired[list[str]]
