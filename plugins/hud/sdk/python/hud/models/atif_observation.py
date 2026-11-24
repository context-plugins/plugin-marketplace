from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .atif_observation_result import AtifObservationResult, AtifObservationResultDict


class AtifObservation(SdkBaseModel):
    results: list[AtifObservationResult]


class AtifObservationDict(TypedDict):
    results: list[AtifObservationResultDict]
