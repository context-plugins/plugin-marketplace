from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.type8 import Type8OrStr
from .option import Option, OptionDict


class Question(SdkBaseModel):
    label: str
    """The question text. Empty when ChatGPT shows the control with no label."""

    type_: Type8OrStr = Field(alias="type")
    """The control that ChatGPT shows for the question."""

    name: Optional[str] = UNSET
    """The variable that ``followUpPrompt`` refers to as ``{name}``."""

    placeholder: Optional[str] = UNSET
    """The placeholder of a ``text``, ``textarea`` or ``date`` question, when ChatGPT gives one."""

    options: list[Option]
    """The choices of a ``radio``, ``checkbox`` or ``select`` question. Empty for ``text``, ``textarea`` and
    ``date``."""


class QuestionDict(TypedDict):
    label: str
    type_: Type8OrStr
    name: NotRequired[str]
    placeholder: NotRequired[str]
    options: list[OptionDict]
