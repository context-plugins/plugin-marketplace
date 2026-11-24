from __future__ import annotations

from typing import TypeAlias

from ..moderation_input_error import ModerationInputError, ModerationInputErrorDict
from ..moderation_input_moderation_result import ModerationInputModerationResult, ModerationInputModerationResultDict

Input: TypeAlias = ModerationInputModerationResult | ModerationInputError

InputDict: TypeAlias = ModerationInputModerationResultDict | ModerationInputErrorDict
