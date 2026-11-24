from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class BatchReportMode(str, Enum):
    """Specifies how build status reports are sent to the source provider for the batch build. This property is only
    used when the source provider for your project is Bitbucket, GitHub, or GitHub Enterprise, and your project is
    configured to report build statuses to the source provider. REPORT_AGGREGATED_BATCH (Default) Aggregate all of the
    build statuses into a single status report. REPORT_INDIVIDUAL_BUILDS Send a separate status report for each
    individual build."""

    REPORT_INDIVIDUAL_BUILDS = "REPORT_INDIVIDUAL_BUILDS"
    REPORT_AGGREGATED_BATCH = "REPORT_AGGREGATED_BATCH"

    __str__ = str.__str__


BatchReportModeOrStr: TypeAlias = Annotated[BatchReportMode | str, open_enum_validator(BatchReportMode)]
