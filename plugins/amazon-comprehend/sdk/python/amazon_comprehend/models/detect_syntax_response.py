from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .syntax_token import SyntaxToken, SyntaxTokenDict


class DetectSyntaxResponse(SdkBaseModel):
    syntax_tokens: Optional[list[SyntaxToken]] = Field(default=UNSET, alias="SyntaxTokens")
    """A collection of syntax tokens describing the text. For each token, the response provides the text, the token
    type, where the text begins and ends, and the level of confidence that Amazon Comprehend has that the token is
    correct. For a list of token types, see Syntax in the Comprehend Developer Guide."""


class DetectSyntaxResponseDict(TypedDict):
    syntax_tokens: NotRequired[list[SyntaxTokenDict]]
