from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.ml_feature import MlFeatureOrStr
from .schema_field import SchemaField, SchemaFieldDict
from .unions.value_doi_t_reports_api import ValueDoiTReportsApi, ValueDoiTReportsApiDict


class Result1(SdkBaseModel):
    schema_value: Optional[list[SchemaField]] = Field(default=UNSET, alias="schema")
    ml_features: Optional[list[MlFeatureOrStr]] = Field(default=UNSET, alias="mlFeatures")
    rows: Optional[list[list[ValueDoiTReportsApi]]] = UNSET
    secondary_rows: Optional[list[list[ValueDoiTReportsApi]]] = Field(default=UNSET, alias="secondaryRows")
    """Secondary time range rows."""

    forecast_rows: Optional[list[list[ValueDoiTReportsApi]]] = Field(default=UNSET, alias="forecastRows")
    cache_hit: Optional[bool] = Field(default=UNSET, alias="cacheHit")
    """If true, results were fetched from the cache."""


class Result1Dict(TypedDict):
    schema_value: NotRequired[list[SchemaFieldDict]]
    ml_features: NotRequired[list[MlFeatureOrStr]]
    rows: NotRequired[list[list[ValueDoiTReportsApiDict]]]
    secondary_rows: NotRequired[list[list[ValueDoiTReportsApiDict]]]
    forecast_rows: NotRequired[list[list[ValueDoiTReportsApiDict]]]
    cache_hit: NotRequired[bool]
