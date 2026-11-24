from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .data_truncation_reason import DataTruncationReason, DataTruncationReasonDict
from .sampling_metadata import SamplingMetadata, SamplingMetadataDict
from .schema_restriction_response2 import SchemaRestrictionResponse2, SchemaRestrictionResponse2Dict


class ResponseMetaData2(SdkBaseModel):
    """Metadata for the report."""

    schema_restriction_response: Optional[SchemaRestrictionResponse2] = Field(
        default=UNSET, alias="schemaRestrictionResponse"
    )
    """Describes the schema restrictions actively enforced in creating this report. To learn more, see `Access and
    data-restriction management <https://support.google.com/analytics/answer/10851388>`__."""

    currency_code: Optional[str] = Field(default=UNSET, alias="currencyCode")
    """The currency code used in this report. Intended to be used in formatting currency metrics like
    ``purchaseRevenue`` for visualization. If currency_code was specified in the request, this response parameter will
    echo the request parameter; otherwise, this response parameter is the property's current currency_code. Currency
    codes are string encodings of currency types from the ISO 4217 standard (https://en.wikipedia.org/wiki/ISO_4217);
    for example "USD", "EUR", "JPY". To learn more, see https://support.google.com/analytics/answer/9796179."""

    time_zone: Optional[str] = Field(default=UNSET, alias="timeZone")
    """The property's current timezone. Intended to be used to interpret time-based dimensions like ``hour`` and
    ``minute``. Formatted as strings from the IANA Time Zone database (https://www.iana.org/time-zones); for example
    "America/New_York" or "Asia/Tokyo"."""

    empty_reason: Optional[str] = Field(default=UNSET, alias="emptyReason")
    """If empty reason is specified, the report is empty for this reason."""

    sampling_metadatas: Optional[list[SamplingMetadata]] = Field(default=UNSET, alias="samplingMetadatas")
    """If this report results is `sampled <https://support.google.com/analytics/answer/13331292>`__, this describes the
    percentage of events used in this report. One ``samplingMetadatas`` is populated for each date range. Each
    ``samplingMetadatas`` corresponds to a date range in order that date ranges were specified in the request. However
    if the results are not sampled, this field will not be defined."""

    subject_to_thresholding: Optional[bool] = Field(default=UNSET, alias="subjectToThresholding")
    """If ``subjectToThresholding`` is true, this report is subject to thresholding and only returns data that meets the
    minimum aggregation thresholds. It is possible for a request to be subject to thresholding thresholding and no data
    is absent from the report, and this happens when all data is above the thresholds. To learn more, see `Data
    thresholds <https://support.google.com/analytics/answer/9383630>`__."""

    data_loss_from_other_row: Optional[bool] = Field(default=UNSET, alias="dataLossFromOtherRow")
    """If true, indicates some buckets of dimension combinations are rolled into "(other)" row. This can happen for high
    cardinality reports. The metadata parameter dataLossFromOtherRow is populated based on the aggregated data table
    used in the report. The parameter will be accurately populated regardless of the filters and limits in the report.
    For example, the (other) row could be dropped from the report because the request contains a filter on sessionSource
    = google. This parameter will still be populated if data loss from other row was present in the input aggregate data
    used to generate this report. To learn more, see `About the (other) row and data sampling
    <https://support.google.com/analytics/answer/13208658#reports>`__."""

    data_truncation_reasons: Optional[list[DataTruncationReason]] = Field(default=UNSET, alias="dataTruncationReasons")
    """If set, indicate there is data truncation in the report."""


class ResponseMetaData2Dict(TypedDict):
    schema_restriction_response: NotRequired[SchemaRestrictionResponse2Dict]
    currency_code: NotRequired[str]
    time_zone: NotRequired[str]
    empty_reason: NotRequired[str]
    sampling_metadatas: NotRequired[list[SamplingMetadataDict]]
    subject_to_thresholding: NotRequired[bool]
    data_loss_from_other_row: NotRequired[bool]
    data_truncation_reasons: NotRequired[list[DataTruncationReasonDict]]
