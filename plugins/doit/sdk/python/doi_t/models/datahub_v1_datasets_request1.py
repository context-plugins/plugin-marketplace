from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class DatahubV1DatasetsRequest1(SdkBaseModel):
    datasets: list[str]
    """List of dataset names to delete."""


class DatahubV1DatasetsRequest1Dict(TypedDict):
    datasets: list[str]
