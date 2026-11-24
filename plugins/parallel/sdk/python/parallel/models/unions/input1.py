from __future__ import annotations

from typing import TypeAlias

from ..moderation_input_error1 import ModerationInputError1, ModerationInputError1Dict
from ..moderation_input_moderation_results import ModerationInputModerationResults, ModerationInputModerationResultsDict

Input1: TypeAlias = ModerationInputModerationResults | ModerationInputError1

Input1Dict: TypeAlias = ModerationInputModerationResultsDict | ModerationInputError1Dict
