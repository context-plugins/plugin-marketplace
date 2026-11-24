from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class AggregationType(str, Enum):
    r"""[Optional; Default is \"auto\"] How data is aggregated. If aggregated by property, all data for the same
    property is aggregated; if aggregated by page, all data is aggregated by canonical URI. If you filter or group by
    page, choose AUTO; otherwise you can aggregate either by property or by page, depending on how you want your data
    calculated; see the help documentation to learn how data is calculated differently by site versus by page. **Note:**
    If you group or filter by page, you cannot aggregate by property. If you specify any value other than AUTO, the
    aggregation type in the result will match the requested type, or if you request an invalid type, you will get an
    error. The API will never change your aggregation type if the requested type is invalid."""

    AUTO = "AUTO"
    BY_PROPERTY = "BY_PROPERTY"
    BY_PAGE = "BY_PAGE"
    BY_NEWS_SHOWCASE_PANEL = "BY_NEWS_SHOWCASE_PANEL"

    __str__ = str.__str__


AggregationTypeOrStr: TypeAlias = Annotated[AggregationType | str, open_enum_validator(AggregationType)]
