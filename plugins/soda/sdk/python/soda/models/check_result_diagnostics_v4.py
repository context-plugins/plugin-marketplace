from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .aggregate_diagnostics_v4 import AggregateDiagnosticsV4, AggregateDiagnosticsV4Dict
from .aggregate_diff_diagnostics_v4 import AggregateDiffDiagnosticsV4, AggregateDiffDiagnosticsV4Dict
from .duplicate_diff_diagnostics_v4 import DuplicateDiffDiagnosticsV4, DuplicateDiffDiagnosticsV4Dict
from .freshness_diagnostics_v4 import FreshnessDiagnosticsV4, FreshnessDiagnosticsV4Dict
from .freshness_diff_diagnostics_v4 import FreshnessDiffDiagnosticsV4, FreshnessDiffDiagnosticsV4Dict
from .fuzzy_duplicate_diagnostics_v4 import FuzzyDuplicateDiagnosticsV4, FuzzyDuplicateDiagnosticsV4Dict
from .group_by_diagnostics_v4 import GroupByDiagnosticsV4, GroupByDiagnosticsV4Dict
from .hierarchy_diagnostics_v4 import HierarchyDiagnosticsV4, HierarchyDiagnosticsV4Dict
from .invalid_diagnostics_v4 import InvalidDiagnosticsV4, InvalidDiagnosticsV4Dict
from .llm_diagnostics_v4 import LlmDiagnosticsV4, LlmDiagnosticsV4Dict
from .metric_diagnostics_v4 import MetricDiagnosticsV4, MetricDiagnosticsV4Dict
from .metric_diff_diagnostics_v4 import MetricDiffDiagnosticsV4, MetricDiffDiagnosticsV4Dict
from .missing_diagnostics_v4 import MissingDiagnosticsV4, MissingDiagnosticsV4Dict
from .reference_diff_diagnostics_v4 import ReferenceDiffDiagnosticsV4, ReferenceDiffDiagnosticsV4Dict
from .row_count_diff_diagnostics_v4 import RowCountDiffDiagnosticsV4, RowCountDiffDiagnosticsV4Dict
from .rows_diff_diagnostics_v4 import RowsDiffDiagnosticsV4, RowsDiffDiagnosticsV4Dict
from .schema_diagnostics_v4 import SchemaDiagnosticsV4, SchemaDiagnosticsV4Dict


class CheckResultDiagnosticsV4(SdkBaseModel):
    aggregate: Optional[AggregateDiagnosticsV4] = UNSET
    aggregate_diff: Optional[AggregateDiffDiagnosticsV4] = UNSET
    duplicate: Optional[InvalidDiagnosticsV4] = UNSET
    duplicate_diff: Optional[DuplicateDiffDiagnosticsV4] = UNSET
    failed_rows: Optional[MissingDiagnosticsV4] = UNSET
    freshness: Optional[FreshnessDiagnosticsV4] = UNSET
    freshness_diff: Optional[FreshnessDiffDiagnosticsV4] = UNSET
    fuzzy_duplicate: Optional[FuzzyDuplicateDiagnosticsV4] = UNSET
    group_by: Optional[GroupByDiagnosticsV4] = UNSET
    hierarchy: Optional[HierarchyDiagnosticsV4] = UNSET
    invalid: Optional[InvalidDiagnosticsV4] = UNSET
    llm: Optional[LlmDiagnosticsV4] = UNSET
    metric: Optional[MetricDiagnosticsV4] = UNSET
    metric_diff: Optional[MetricDiffDiagnosticsV4] = UNSET
    missing: Optional[MissingDiagnosticsV4] = UNSET
    reference_diff: Optional[ReferenceDiffDiagnosticsV4] = UNSET
    row_count: Optional[AggregateDiagnosticsV4] = UNSET
    row_count_diff: Optional[RowCountDiffDiagnosticsV4] = UNSET
    rows_diff: Optional[RowsDiffDiagnosticsV4] = UNSET
    schema_value: Optional[SchemaDiagnosticsV4] = Field(default=UNSET, alias="schema")


class CheckResultDiagnosticsV4Dict(TypedDict):
    aggregate: NotRequired[AggregateDiagnosticsV4Dict]
    aggregate_diff: NotRequired[AggregateDiffDiagnosticsV4Dict]
    duplicate: NotRequired[InvalidDiagnosticsV4Dict]
    duplicate_diff: NotRequired[DuplicateDiffDiagnosticsV4Dict]
    failed_rows: NotRequired[MissingDiagnosticsV4Dict]
    freshness: NotRequired[FreshnessDiagnosticsV4Dict]
    freshness_diff: NotRequired[FreshnessDiffDiagnosticsV4Dict]
    fuzzy_duplicate: NotRequired[FuzzyDuplicateDiagnosticsV4Dict]
    group_by: NotRequired[GroupByDiagnosticsV4Dict]
    hierarchy: NotRequired[HierarchyDiagnosticsV4Dict]
    invalid: NotRequired[InvalidDiagnosticsV4Dict]
    llm: NotRequired[LlmDiagnosticsV4Dict]
    metric: NotRequired[MetricDiagnosticsV4Dict]
    metric_diff: NotRequired[MetricDiffDiagnosticsV4Dict]
    missing: NotRequired[MissingDiagnosticsV4Dict]
    reference_diff: NotRequired[ReferenceDiffDiagnosticsV4Dict]
    row_count: NotRequired[AggregateDiagnosticsV4Dict]
    row_count_diff: NotRequired[RowCountDiffDiagnosticsV4Dict]
    rows_diff: NotRequired[RowsDiffDiagnosticsV4Dict]
    schema_value: NotRequired[SchemaDiagnosticsV4Dict]
