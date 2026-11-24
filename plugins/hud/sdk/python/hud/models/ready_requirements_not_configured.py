from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import RFC3339DateTime, SdkBaseModel


class ReadyRequirementsNotConfigured(SdkBaseModel):
    """Sentinel for "no config on the taskset".

    Discriminated by ``has_requirements`` so the UI can hide the REQUIREMENTS section entirely vs. render an empty
    card."""

    passed: bool = True
    has_requirements: bool = False
    evaluated_at: RFC3339DateTime


class ReadyRequirementsNotConfiguredDict(TypedDict):
    passed: NotRequired[bool]
    has_requirements: NotRequired[bool]
    evaluated_at: RFC3339DateTime
