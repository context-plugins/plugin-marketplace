from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class V1InitialismgeneratorRequest(SdkBaseModel):
    phrase: str
    """Phrase to convert to initialism (max 500 characters)"""

    exclude_common_words: Optional[bool] = Field(default=UNSET, alias="excludeCommonWords")
    """Exclude common words like 'the', 'of', 'and'"""

    uppercase: Optional[bool] = UNSET
    """Return the initialism in uppercase"""


class V1InitialismgeneratorRequestDict(TypedDict):
    phrase: str
    exclude_common_words: NotRequired[bool]
    uppercase: NotRequired[bool]
