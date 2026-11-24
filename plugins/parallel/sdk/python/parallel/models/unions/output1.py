from __future__ import annotations

from typing import TypeAlias

from ..moderation_output_error1 import ModerationOutputError1, ModerationOutputError1Dict
from ..moderation_output_moderation_results import (
    ModerationOutputModerationResults,
    ModerationOutputModerationResultsDict,
)

Output1: TypeAlias = ModerationOutputModerationResults | ModerationOutputError1

Output1Dict: TypeAlias = ModerationOutputModerationResultsDict | ModerationOutputError1Dict
