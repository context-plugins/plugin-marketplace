import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { disksFileSystemsSchema, type DisksFileSystems } from "./disks-file-systems.js";
import { dnsSchema, type Dns } from "./dns.js";
import { firewallSchema, type Firewall } from "./firewall.js";
import { hostInfoSchema, type HostInfo } from "./host-info.js";
import { hostsFileSchema, type HostsFile } from "./hosts-file.js";
import { interfacesSchema, type Interfaces } from "./interfaces.js";
import { listeningPortsSchema, type ListeningPorts } from "./listening-ports.js";
import { loggedInUsersSchema, type LoggedInUsers } from "./logged-in-users.js";
import { routes2Schema, type Routes2 } from "./routes2.js";
import { servicesSchema, type Services } from "./services.js";
import { usersGroupsSchema, type UsersGroups } from "./users-groups.js";

/** System state collectors to enable and configure. */
export type Collectors = {
  /** Creates events based on entries collected from the hosts file */
  hostsfile?: HostsFile;
  /** Creates events for each of the host’s network interfaces */
  interfaces?: Interfaces;
  /** Creates events for physical disks, partitions, and file systems */
  disk?: DisksFileSystems;
  /** Creates events based on the host system’s current state */
  metadata?: HostInfo;
  /** Creates events based on entries collected from the host’s network routes */
  routes?: Routes2;
  /** Creates events for DNS resolvers and search entries */
  dns?: Dns;
  /** Creates events for local users and groups */
  user?: UsersGroups;
  /** Creates events for Firewall rules entries */
  firewall?: Firewall;
  /** Creates events from the list of services */
  services?: Services;
  /** Creates events from list of listening ports */
  ports?: ListeningPorts;
  /** Creates events from list of logged-in users */
  loginUsers?: LoggedInUsers;
};

export const collectorsSchema: Schema<Collectors> = s.object<Collectors>({
  hostsfile: s.optional(s.lazy(() => hostsFileSchema)),
  interfaces: s.optional(s.lazy(() => interfacesSchema)),
  disk: s.optional(s.lazy(() => disksFileSystemsSchema)),
  metadata: s.optional(s.lazy(() => hostInfoSchema)),
  routes: s.optional(s.lazy(() => routes2Schema)),
  dns: s.optional(s.lazy(() => dnsSchema)),
  user: s.optional(s.lazy(() => usersGroupsSchema)),
  firewall: s.optional(s.lazy(() => firewallSchema)),
  services: s.optional(s.lazy(() => servicesSchema)),
  ports: s.optional(s.lazy(() => listeningPortsSchema)),
  loginUsers: s.optional(s.lazy(() => loggedInUsersSchema)),
});
