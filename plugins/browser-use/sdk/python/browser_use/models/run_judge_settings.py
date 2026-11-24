from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class RunJudgeSettings(SdkBaseModel):
    """Opt-in LLM judgement of the finished run. Presence of this object turns the judge on (send {} for defaults); CP
    judges the run's trajectory after it goes terminal and surfaces the verdict as RunSummary.judgement (null until it
    lands). The judge's LLM call is billed to the run."""

    context: Optional[str] = UNSET


class RunJudgeSettingsDict(TypedDict):
    context: NotRequired[str]
