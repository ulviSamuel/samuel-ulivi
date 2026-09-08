import type { Project } from '../types/content';

const noImages: Project['images'] = [];

export const projects: Project[] = [
  {
    id: 'logbook-pics-app', slug: 'logbook-pics-app', title: 'LogbookPicsApp', year: '2023',
    context: 'Professional internship at Elettra Sincrotrone Trieste', status: 'Repository available; external task/backend contract',
    role: 'I contributed to the Android application together with another student; exact feature ownership requires review.', collaborators: 'Another student and colleague; institutional context and credits require review.',
    categories: ['Android', 'Professional internship', 'Image annotation'], technologies: ['Java', 'Android', 'Android Views/XML', 'View Binding', 'CameraX', 'Volley', 'Code Scanner', 'PhotoEditor', 'ZoomLayout', 'Material Components'],
    shortDescription: 'An Android application developed during my internship at Elettra Sincrotrone Trieste, designed as a mobile frontend for its digital logbook workflow.',
    longDescription: 'The application scans QR-defined tasks, obtains or captures an image, supports editing and dynamic metadata components, previews the result, and posts edited JSON to a task-provided destination. I contributed to the application together with another student.',
    features: ['QR task scanning', 'Image capture or selection', 'Drawing, erasing, text, undo, redo, zoom, and pan', 'Dynamic metadata components', 'JSON GET and POST flows'],
    architecture: { frontend: ['Android Views/XML', 'View Binding'], backend: ['External JSON task and destination endpoints'], database: [], other: ['CameraX', 'Volley', 'PhotoEditor', 'ZoomLayout'] },
    challenges: ['Working with a task contract supplied externally', 'Composing image annotation and dynamic metadata in a mobile workflow'], repositoryUrl: 'https://github.com/ulviSamuel/LogbookPicsApp', images: noImages,
    limitations: ['Endpoint contract is external and not included', 'Gallery handling contains TODOs', 'Exact contribution split requires review'], reviewStatus: 'review-required', visibility: 'public-repository',
  },
  {
    id: 'biblioteca-sapienza', slug: 'biblioteca-sapienza', title: 'Biblioteca Sapienza', year: '2024', context: 'Educational web application', status: 'Repository available; no live demo verified',
    role: 'Local footer identifies Samuel Ulivi as the developer; wider contribution history is not independently available.', collaborators: 'No collaborators explicitly named in the inspected local source.', categories: ['Web', 'Database', 'Library systems'], technologies: ['PHP', 'MySQL/MariaDB', 'HTML', 'CSS', 'JavaScript', 'jQuery', 'jQuery UI', 'SweetAlert2', 'Google Maps JavaScript API'],
    shortDescription: 'Library catalogue and circulation system covering discovery, reservations, loans, returns, and staff workflows.', longDescription: 'The system supports catalogue filters and item details for books, maps, encyclopaedias, and volumes, alongside accounts, reservations, reservation history, loans, returns, staff workflows, and inventory insertion.',
    features: ['Catalogue filters and details', 'Registration and login', 'Reservations and reservation history', 'Loans and returns', 'Staff inventory workflows', 'Library location view'], architecture: { frontend: ['Server-rendered PHP/HTML/CSS', 'Browser JavaScript', 'jQuery and jQuery UI'], backend: ['Procedural PHP', 'Sessions', 'MySQLi'], database: ['MySQL/MariaDB schema', 'Views', 'Stored procedures'], other: ['Google Maps JavaScript API', 'SweetAlert2'] },
    challenges: ['Coordinating catalogue, reservations, loans, returns, and staff workflows'], repositoryUrl: 'https://github.com/ulviSamuel/Biblioteca-Sapienza', images: noImages, limitations: ['No tests, CI, or deployment configuration', 'External API/CDN dependencies may require review', 'Source copy contains sensitive credentials and sample personal data'], reviewStatus: 'verified', visibility: 'public-repository',
  },
  {
    id: 'appane', slug: 'appane', title: 'Appane', year: '2023', context: 'Educational web application; repository: Appane', status: 'Repository available; no live demo verified',
    role: 'I worked on the educational web application; the local source does not prove the exact authorship split.', collaborators: 'No collaborators explicitly named in the inspected local source.', categories: ['Web', 'E-commerce flow', 'Database'], technologies: ['PHP', 'MySQL/MySQLi', 'HTML', 'CSS', 'JavaScript', 'XMLHttpRequest'],
    shortDescription: 'A complete educational e-commerce platform for bakery products, with customer-facing shopping flows, account and order management, server-side logic, database integration and an administration area.', longDescription: 'Users can browse weekly products, inspect details, register and log in, add quantities to a cart, remove items, and confirm orders. Guest carts use PHP sessions and can be merged into user carts after login. The project also includes administration functionality.',
    features: ['Weekly product browsing', 'Product details', 'Registration and login', 'Session-backed cart', 'Order confirmation', 'Administration functionality'], architecture: { frontend: ['PHP-rendered HTML', 'CSS', 'JavaScript', 'XMLHttpRequest'], backend: ['Procedural PHP', 'Sessions'], database: ['MySQL/MySQLi tables for users, products, categories, and cart state'], other: [] },
    challenges: ['Connecting guest and authenticated cart flows', 'Representing products, categories, users, and cart state'], repositoryUrl: 'https://github.com/ulviSamuel/Appane', images: noImages, limitations: ['No schema dump, tests, or deployment setup', 'Source copy contains local credentials and insecure SQL/authentication patterns'], reviewStatus: 'verified', visibility: 'public-repository',
  },
  {
    id: 'concert-reservation', slug: 'concert-reservation', title: 'Concert Reservation V.1', year: '2024', context: 'Educational web application', status: 'Repository available; no live demo verified',
    role: 'I contributed to the educational web application; repository evidence does not establish a complete authorship split.', collaborators: 'No collaborators explicitly named in the inspected local source.', categories: ['Web', 'Reservation flow', 'Database'], technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL/MariaDB', 'XMLHttpRequest'],
    shortDescription: 'Concert reservation flow for selecting a band, date, location, and available seat.', longDescription: 'Users select a band, concert date, location, and available seat. Session-based authentication prevents an authenticated user from booking more than one seat for a date.',
    features: ['Band selection', 'Date and location selection', 'Seat selection', 'Session authentication', 'Reservation endpoint'], architecture: { frontend: ['Static HTML/CSS', 'Browser JavaScript', 'XMLHttpRequest'], backend: ['Procedural PHP JSON endpoints', 'Sessions'], database: ['MySQL/MariaDB tables for bands, dates, reservations, and users'], other: [] },
    challenges: ['Connecting multi-step reservation choices to backend availability data'], repositoryUrl: 'https://github.com/ulviSamuel/Concert-Reservation-V.1', images: noImages, limitations: ['Hard-coded LAN URLs', 'Source copy contains credentials and plaintext passwords', 'Availability/booking transaction behavior requires review'], reviewStatus: 'verified', visibility: 'public-repository',
  },
  {
    id: 'chat-php', slug: 'chat-php', title: 'Chat-php', year: '2023', context: 'Educational web application', status: 'Repository available; no live demo verified',
    role: 'I worked on the educational web application; the local source does not identify collaborators.', collaborators: 'No collaborators explicitly named in the inspected local source.', categories: ['Web', 'Messaging', 'Database'], technologies: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    shortDescription: 'One-to-one chat application with login, conversation lists, message submission, timestamps, and refresh.', longDescription: 'The application supports user login, existing-conversation listing, new-chat selection, timestamped messages, message submission, and periodic page refresh.',
    features: ['Login', 'Conversation listing', 'New chat selection', 'Timestamped messages', 'Message submission', 'Periodic refresh'], architecture: { frontend: ['PHP-rendered HTML/CSS', 'Small JavaScript handlers'], backend: ['Procedural PHP', 'Sessions'], database: ['MySQL tables for users and messages'], other: [] },
    challenges: ['Connecting conversation selection and message persistence in a server-rendered flow'], repositoryUrl: 'https://github.com/ulviSamuel/Chat-php', images: noImages, limitations: ['No tests, CI, or deployment setup', 'Source copy contains plaintext sample credentials/messages and insecure SQL/output handling'], reviewStatus: 'verified', visibility: 'public-repository',
  },
  {
    id: 'burglar-alarm', slug: 'burglar-alarm', title: 'Burglar-alarm', year: '2023', context: 'Embedded educational prototype', status: 'Prototype source available; hardware behavior not independently validated',
    role: 'I worked on the embedded prototype; no contributor list was found in the inspected source.', collaborators: 'No collaborators explicitly named in the inspected local source.', categories: ['Arduino', 'Embedded systems', 'Hardware'], technologies: ['Arduino C++', 'PN532 RFID', 'PIR sensor', 'Hall-effect sensor', 'LiquidCrystal', 'EEPROM'],
    shortDescription: 'Arduino alarm prototype combining RFID access, motion and door sensing, display feedback, and timed alerts.', longDescription: 'The firmware supports arming and disarming, master-card key management, motion and door sensing, LCD feedback, LEDs, service/alarm buzzers, a reset input, and EEPROM persistence.',
    features: ['RFID access', 'PIR motion detection', 'Hall-effect door sensing', 'LCD feedback', 'LED and buzzer alerts', 'EEPROM key persistence'], architecture: { frontend: [], backend: [], database: [], other: ['Arduino firmware', 'PN532 RFID reader over SPI', 'Sensors and actuators', 'EEPROM'] },
    challenges: ['Coordinating multiple sensors, access control, alerts, and persistent keys on embedded hardware'], repositoryUrl: 'https://github.com/ulviSamuel/Burglar-alarm', images: noImages, limitations: ['No wiring diagram or reproducible hardware test', 'Hard-coded master RFID value', 'EEPROM reset behavior and blocking delays require review'], reviewStatus: 'verified', visibility: 'public-repository',
  },
];
