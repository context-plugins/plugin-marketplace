from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class SlotValueRegexFilter(SdkBaseModel):
    pattern: str
    r"""A regular expression used to validate the value of a slot. Use a standard regular expression. Amazon Lex
    supports the following characters in the regular expression: A-Z, a-z 0-9 Unicode characters ("\⁠u") Represent
    Unicode characters with four digits, for example "\⁠u0041" or "\⁠u005A". The following regular expression operators
    are not supported: Infinite repeaters: *, +, or {x,} with no upper bound. Wild card (.)"""


class SlotValueRegexFilterDict(TypedDict):
    pattern: str
