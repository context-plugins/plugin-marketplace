from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .syntax_token import SyntaxToken, SyntaxTokenDict


class BatchDetectSyntaxItemResult(SdkBaseModel):
    index: Optional[int] = Field(default=UNSET, alias="Index")
    """The zero-based index of the document in the input list."""

    syntax_tokens: Optional[list[SyntaxToken]] = Field(default=UNSET, alias="SyntaxTokens")
    """The syntax tokens for the words in the document, one token for each word."""


class BatchDetectSyntaxItemResultDict(TypedDict):
    index: NotRequired[int]
    syntax_tokens: NotRequired[list[SyntaxTokenDict]]
