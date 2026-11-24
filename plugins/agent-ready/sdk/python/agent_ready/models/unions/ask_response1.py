from __future__ import annotations

from typing import TypeAlias

from ..ask_answer import AskAnswer, AskAnswerDict
from ..ask_failure import AskFailure, AskFailureDict

AskResponse1: TypeAlias = AskAnswer | AskFailure
"""Either an answer or a failure."""

AskResponse1Dict: TypeAlias = AskAnswerDict | AskFailureDict
