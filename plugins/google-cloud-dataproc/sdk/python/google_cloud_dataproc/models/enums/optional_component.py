from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class OptionalComponent(str, Enum):
    COMPONENT_UNSPECIFIED = "COMPONENT_UNSPECIFIED"
    ALLOYDB_CONNECTOR = "ALLOYDB_CONNECTOR"
    ANACONDA = "ANACONDA"
    DELTA = "DELTA"
    DOCKER = "DOCKER"
    DRUID = "DRUID"
    FLINK = "FLINK"
    HBASE = "HBASE"
    HIVE_WEBHCAT = "HIVE_WEBHCAT"
    HUDI = "HUDI"
    ICEBERG = "ICEBERG"
    JUPYTER = "JUPYTER"
    PIG = "PIG"
    PRESTO = "PRESTO"
    TRINO = "TRINO"
    RANGER = "RANGER"
    SOLR = "SOLR"
    ZEPPELIN = "ZEPPELIN"
    ZOOKEEPER = "ZOOKEEPER"
    JUPYTER_KERNEL_GATEWAY = "JUPYTER_KERNEL_GATEWAY"

    __str__ = str.__str__


OptionalComponentOrStr: TypeAlias = Annotated[OptionalComponent | str, open_enum_validator(OptionalComponent)]
