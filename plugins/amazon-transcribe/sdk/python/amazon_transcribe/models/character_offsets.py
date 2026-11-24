from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CharacterOffsets(SdkBaseModel):
    begin: Optional[int] = Field(default=UNSET, alias="Begin")
    """Provides the character count of the first character where a match is identified. For example, the first character
    associated with an issue or a category match in a segment transcript."""

    end: Optional[int] = Field(default=UNSET, alias="End")
    """Provides the character count of the last character where a match is identified. For example, the last character
    associated with an issue or a category match in a segment transcript."""


class CharacterOffsetsDict(TypedDict):
    begin: NotRequired[int]
    end: NotRequired[int]
