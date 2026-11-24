from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class AttributeConfig(SdkBaseModel):
    attribute_name: str = Field(alias="AttributeName")
    """The name of the attribute as specified in the schema. Amazon Forecast supports the target field of the target
    time series and the related time series datasets. For example, for the RETAIL domain, the target is demand."""

    transformations: dict[str, str] = Field(alias="Transformations")
    """The method parameters (key-value pairs), which are a map of override parameters. Specify these parameters to
    override the default values. Related Time Series attributes do not accept aggregation parameters. The following list
    shows the parameters and their valid values for the "filling" featurization method for a Target Time Series dataset.
    Default values are bolded. aggregation: sum, avg, first, min, max frontfill: none middlefill: zero, nan (not a
    number), value, median, mean, min, max backfill: zero, nan, value, median, mean, min, max The following list shows
    the parameters and their valid"""


class AttributeConfigDict(TypedDict):
    attribute_name: str
    transformations: dict[str, str]
