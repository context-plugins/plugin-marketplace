"""A discriminated union whose tag the variants need not carry.

OpenAPI puts ``discriminator`` on the ``oneOf``/``anyOf`` node rather than on the schemas it
selects, so the property name and the value-to-schema mapping are the union's facts. A schema that
does not pin that property itself can appear in two unions under two different property names and
two different tag values, and a model carrying one union's tag in a field could never serve the
other.

:class:`WireDiscriminator` routes on that tag without requiring the variants to carry it. Each arm
carries pydantic's ``Tag`` with the mapping value the spec gave it; the metadata names the wire
property. **The union supplies the tag exactly where the variant has no field for it** -- removing
the key before such a variant validates, and writing it back when such a variant is dumped -- so one
model round-trips through every union that references it, and a variant's field set stays exactly its
own schema's.

A variant whose schema *does* declare the property keeps that field, and the union leaves it alone in
both directions: the key reaches the field, and the field dumps it back. The field is read through
its alias, so the tag may arrive under the wire spelling or under the field's own name.

Several mapping values may select the same variant. Each value is its own arm, so each routes; the
first one the union lists is the spelling a model instance dumps through, since a model carries no
tag of its own to disambiguate them.

**Every discriminated union names this one metadata, whatever its arms declare.** Pydantic's own
``Field(discriminator=...)`` can serve only the narrowest case -- every arm pinning the property to a
constant equal to its own mapping value, under one shared field name, one value per arm -- and it
requires a ``Literal``, refusing a plain ``str``. Reserving it for that case would make the emitting
template resolve every arm's schema and compare it against the mapping before it could choose a
shape, and a wrong comparison routes on a value the spec never named. One shape, decided from the
union node alone, is the trade."""

from __future__ import annotations

from dataclasses import dataclass
from typing import Any, get_args

from pydantic import GetCoreSchemaHandler, Tag
from pydantic_core import core_schema


@dataclass(frozen=True, slots=True)
class WireDiscriminator:
    """``Annotated`` metadata turning a union of ``Tag``-marked arms into a wire-tagged union.

    Args:
        property_name: The wire key the tag is read from and written to -- the spec's
            ``discriminator.propertyName`` in its wire spelling, not a Python field name, because the
            tag is read before any variant's alias machinery runs.
        companion_key: The key the dict companions declare the tag under, given wherever it differs
            from ``property_name`` and some variant needs the union to declare it -- the member
            spelling of the wire key, sanitized where that key is a Python keyword or no identifier
            at all. Read alongside ``property_name``; never written on dump, since only the wire
            spelling belongs on the wire."""

    property_name: str
    companion_key: str | None = None

    def __get_pydantic_core_schema__(self, source: Any, handler: GetCoreSchemaHandler) -> core_schema.CoreSchema:
        """Build the tagged union, supplying the tag for the arms that declare no field for it.

        Args:
            source: The union of ``Annotated[Variant, Tag(...)]`` arms this metadata annotates.
            handler: Pydantic's schema generator, called once per arm.

        Returns:
            A tagged-union schema keyed by the variants' declared tags.

        Raises:
            TypeError: If an arm carries no ``Tag``, leaving its mapping value undeclared."""
        property_name = self.property_name
        arms: list[tuple[type[Any], str]] = []
        spellings: dict[type[Any], frozenset[str]] = {}
        for arm in get_args(source):
            variant, *metadata = get_args(arm)
            tag = next((item.tag for item in metadata if isinstance(item, Tag)), None)
            if tag is None:
                raise TypeError(f"{variant!r} carries no Tag, so WireDiscriminator has no mapping value for it")
            arms.append((variant, tag))
            if variant not in spellings:
                spellings[variant] = frozenset(
                    name for name, field in variant.model_fields.items() if property_name in (name, field.alias)
                )

        # The value a model instance dumps through, for a variant several mapping values select. It
        # carries no tag of its own, so the union's first listing is the one deterministic answer.
        canonical: dict[type[Any], str] = {}
        for variant, tag in arms:
            canonical.setdefault(variant, tag)

        declared = {name for names in spellings.values() for name in names}
        substitute = {self.companion_key} if self.companion_key is not None else set[str]()
        keys = [property_name, *sorted((declared | substitute) - {property_name})]

        def read_tag(value: Any) -> str | None:
            if not isinstance(value, dict):
                return canonical.get(type(value))
            for key in keys:
                tag_ = value.get(key)
                if isinstance(tag_, str):
                    return tag_
            return None

        # pydantic-core names the reader in both union-tag errors, so this reads ``using petKind()``
        # rather than ``using read_tag()`` -- the wire key the spec declares, which is what a caller
        # reading the message is looking for.
        read_tag.__name__ = property_name

        def choice(variant_: type[Any], tag_: str) -> core_schema.CoreSchema:
            schema = handler.generate_schema(variant_)
            if spellings[variant_]:
                return schema
            foreign = frozenset(keys)

            def without_tag(value: Any, validate: core_schema.ValidatorFunctionWrapHandler) -> Any:
                if isinstance(value, dict) and not foreign.isdisjoint(value):
                    return validate({key: item for key, item in value.items() if key not in foreign})
                return validate(value)

            def with_tag(value: Any, serialize: core_schema.SerializerFunctionWrapHandler) -> Any:
                dumped = serialize(value)
                if isinstance(dumped, dict):
                    return {**dumped, property_name: tag_}
                return dumped

            return core_schema.no_info_wrap_validator_function(
                without_tag, schema, serialization=core_schema.wrap_serializer_function_ser_schema(with_tag)
            )

        return core_schema.tagged_union_schema({tag: choice(variant, tag) for variant, tag in arms}, read_tag)
