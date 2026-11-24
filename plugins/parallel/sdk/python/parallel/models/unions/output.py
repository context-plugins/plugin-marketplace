from __future__ import annotations

from typing import TypeAlias

from ..moderation_output_error import ModerationOutputError, ModerationOutputErrorDict
from ..moderation_output_moderation_result import ModerationOutputModerationResult, ModerationOutputModerationResultDict

Output: TypeAlias = ModerationOutputModerationResult | ModerationOutputError

OutputDict: TypeAlias = ModerationOutputModerationResultDict | ModerationOutputErrorDict
