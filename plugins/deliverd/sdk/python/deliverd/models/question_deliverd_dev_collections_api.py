from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.kind import KindOrStr


class QuestionDeliverdDevCollectionsApi(SdkBaseModel):
    prompt: str
    """The question, as you would ask it out loud"""

    help: Optional[str] = UNSET
    """The sentence under the field that stops the wrong answer being given"""

    kind: KindOrStr
    """What kind of answer: text, long_text, number, date, choice, multi_choice or boolean"""

    required: Optional[bool] = UNSET
    """Required unless you say otherwise; a required question blocks submission"""

    options: Optional[list[str]] = UNSET
    """The options, for choice and multi_choice. At least two, or the question is not one"""


class QuestionDeliverdDevCollectionsApiDict(TypedDict):
    prompt: str
    help: NotRequired[str]
    kind: KindOrStr
    required: NotRequired[bool]
    options: NotRequired[list[str]]
